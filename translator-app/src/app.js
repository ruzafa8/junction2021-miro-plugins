const { board } = window.miro;

document.getElementById("button").onclick = () => { 
  const text = document.getElementById("text").value.replace(/ /g,"%20")
  const language = document.getElementById("languageSelector").value
  fetch(`https://api-free.deepl.com/v2/translate?auth_key=${env.DEEPL_API_KEY}&text=${text}&target_lang=${language}`,{method:"POST"})
  .then(res => res.text())
  .then(JSON.parse)
  .then(res => {
    document.getElementById("result").value = res.translations[0].text;
  }).catch(console.error)
}
