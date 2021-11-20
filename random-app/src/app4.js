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
      for(let dice in dices) {
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
  
  