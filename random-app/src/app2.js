const { board } = window.miro;

document.getElementById("coin").onclick = async function () {
  var result;
  const data = {
    "jsonrpc": "2.0",
    "method": "generateIntegers",
    "params": {
      "apiKey": env.RANDOM_ORG_API_KEY,
      "n": 1,
      "min": 0,
      "max": 1
    },
    "id": 42
  }
  const headers = {
    'Content-Type': 'application/json'
  }
  try {
    result = await fetch("https://api.random.org/json-rpc/4/invoke", { method: "POST", headers, body: JSON.stringify(data) })
    document.getElementById("coin").classList = "";
    coin = await JSON.parse(await result.text()).result.random.data[0]
    if (coin == 0) {
      document.getElementById("coin").classList = 'heads'
    } else {
      document.getElementById("coin").classList = 'tails'
    }
  } catch (e) {
    console.log(e)
  }
}

document.getElementById("but").onclick=async function(){
  const data={
    "jsonrpc": "2.0",
    "method": "generateIntegers",
    "params": {
        "apiKey": env.RANDOM_ORG_API_KEY,
        "n":10,
        "min":1,
        "max":6
    },
    "id": 42
  }
  const headers={
    'Content-Type': 'application/json'
  }
  try {
    results = await fetch("https://api.random.org/json-rpc/4/invoke",{method:"POST",headers,body:JSON.stringify(data)})
    dices=await JSON.parse(await results.text()).result.random.data
    console.log(dices)
    for(let i=0;i<dices.length;i++) {
      
      dice=dices[i]
      console.log(dice)
      if(dice==1){
        document.getElementById('dice').innerHTML = '<div class="dice first-face"><span class="dot"></span></div>';
      }else if(dice==2){
        document.getElementById('dice').innerHTML = '<div class="dice second-face"><span class="dot"></span><span class="dot"></span></div>';
      }else if(dice==3){
        document.getElementById('dice').innerHTML = '<div class="dice third-face"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
      }else if(dice==4){
        document.getElementById('dice').innerHTML = '<div class="fourth-face dice"><div class="column"><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span></div></div>';
      }else if(dice==5){
        document.getElementById('dice').innerHTML = '<div class="fifth-face dice"><div class="column"><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span></div></div>';
      }else if(dice==6){
        document.getElementById('dice').innerHTML = '<div class="sixth-face dice"><div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
      }
      await new Promise(r => setTimeout(r,100));
    }

  }catch(e){
    console.log(e)
  }
}
