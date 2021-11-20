const { board } = window.miro;

async function init() {
  const stickyNote = await board.createStickyNote({
    content: "Hello, World!",
  });

  await board.viewport.zoomTo(stickyNote);
}

document.getElementById("button").onclick=async function(){
  var min=parseInt(document.getElementById("min_num").value);
  var max=parseInt(document.getElementById("max_num").value);
  var result;
  console.log("aaaaaaaaaaaa")
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
    document.getElementById("result").value=await JSON.parse(await result.text()).result.random.data[0]
  }catch(e){
    console.log(e)
  }
}

init();
