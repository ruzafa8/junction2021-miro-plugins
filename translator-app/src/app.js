const { board } = window.miro;

const performTranslation = text => {
  const language = document.getElementById("languageSelector").value
  fetch(`https://api-free.deepl.com/v2/translate?auth_key=${env.DEEPL_API_KEY}&text=${text}&target_lang=${language}`,{method:"POST"})
    .then(res => res.text())
    .then(JSON.parse)
    .then(res => {
      document.getElementById("result").value = res.translations[0].text;
    }).catch(console.error)
}
document.getElementById("button").onclick = () => { 
  const text = document.getElementById("text").value.replace(/ /g,"%20")
  performTranslation(text);
}

document.getElementById("items").onclick = () => {
  board.getSelection().then(items => {
    const stickyNotes = items.filter((item) => item.type === 'sticky_note')
    if (stickyNotes.length > 0){
      const con = stickyNotes[0].content.replace("<p>","").replace("</p>","");
      performTranslation(con);
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

retrieveLanguage();