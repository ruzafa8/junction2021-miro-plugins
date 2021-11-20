document.getElementById("coin").onclick=async function(){
  var result;
  console.log("aaaaaaaaaaaa");
  const data={
    "jsonrpc": "2.0",
    "method": "generateIntegers",
    "params": {
        "apiKey": env.RANDOM_ORG_API_KEY,
        "n":1,
        "min":0,
        "max":1
    },
    "id": 42
  }
  const headers={
    'Content-Type': 'application/json'
  }
  try {
    result= await fetch("https://api.random.org/json-rpc/4/invoke",{method:"POST",headers,body:JSON.stringify(data)})
    document.getElementById("coin").classList="";
    coin=await JSON.parse(await result.text()).result.random.data[0]
    if(coin==0){
      document.getElementById("coin").classList='heads'
    }else{
      document.getElementById("coin").classList='tails'
    }
  }catch(e){
    console.log(e)
  }
}
