const { board } = window.miro;

document.getElementById("randomize-button").onclick=async function(){
  var min_elem = document.getElementById("min_num")
  var min=parseInt(min_elem.value);
  if (min != min) { // min is NaN, like when there's no input
    min = parseInt(min_elem.placeholder)
    // maybe enable this?
    // min_elem.value = min_elem.placeholder
  }
  var max_elem = document.getElementById("max_num")
  var max=parseInt(max_elem.value);
  if (max != max) {
    max = parseInt(max_elem.placeholder)
  }
  var result;
  const data={
    "jsonrpc": "2.0",
    "method": "generateIntegers",
    "params": {
        "apiKey": env.RANDOM_ORG_API_KEY,
        "n":1,
        "min":min,
        "max":max
    },
    "id": 42
  }
  const headers={
    'Content-Type': 'application/json'
  }
  try {
    result= await fetch("https://api.random.org/json-rpc/4/invoke",{method:"POST",headers,body:JSON.stringify(data)})
    console.log(JSON.stringify(data))
    result_elem = document.getElementById("randomize-result")
    result_elem.value=await JSON.parse(await result.text()).result.random.data[0]
    result_elem.classList.remove("hidden")
  }catch(e){
    console.log(e)
  }
}
