const { board } = window.miro;

const performTranslation = text => {
  const language = document.getElementById("languageSelector").value
  fetch(`https://api-free.deepl.com/v2/translate?auth_key=${env.DEEPL_API_KEY}&text=${text}&target_lang=${language}`,{method:"POST"})
    .then(res => res.text())
    .then(JSON.parse)
    .then(({translations}) => translations[0])
    .then(({text, detected_source_language}) => {
      // with PT and EN doesn't work well, because the are stored as PT-BR / PT-PT and EN-GB / EN-US
      const detectedLanguage = detected_source_language == "PT" ? {name:"Portuguese"} :
        detected_source_language == "EN" ? {name:"English"} :  getCountryByCode(detected_source_language);

      document.getElementById("detectedLanguage").innerHTML = detectedLanguage ? `From ${detectedLanguage.name} (detected)` : "";
      document.getElementById("result").innerHTML = text;
    }).catch(console.error)
}

document.getElementById("button").onclick = () => { 
  const text = document.getElementById("text").value.replace(/ /g,"%20")
  performTranslation(text);
}

document.getElementById("items").onclick = () => {
  board.getSelection().then(items => {
    if (items.length > 0){
      const con = items[0].content;
      if (con) performTranslation(con.replace("<p>","").replace("</p>",""));
    }
  })
}

let supportedLanguages = [];

const retrieveLanguage = () => {
  fetch(`https://api-free.deepl.com/v2/languages?auth_key=${env.DEEPL_API_KEY}&type=target`)
  .then(res => res.text())
  .then(JSON.parse)
  .then(res => {
    res.sort((item1,item2) => item1.name > item2.name ? 1 : item1.name == item2.name ? 0 : -1)
    supportedLanguages = res;
    setLanguages(res)
  }).catch(console.error);
}

const setLanguages = languages => {
  const select = document.getElementById('languageSelector');
  const children = languages.map(({language, name}) => {
    const opt = document.createElement('option');
    opt.value = language;
    opt.innerHTML = name;
    if (language == "EN-GB") opt.selected = true;
    return opt;
  });
  select.replaceChildren(...children);
}

const getCountryByCode = code => supportedLanguages.find(({language}) => language.includes(code))

retrieveLanguage();