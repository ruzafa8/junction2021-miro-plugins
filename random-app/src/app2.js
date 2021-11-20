const { board } = window.miro;

const nextRandom = size => {
    const data= {
        "jsonrpc": "2.0", "method": "generateIntegers",
        "params": {
            "apiKey": env.RANDOM_ORG_API_KEY,
            "n":1,"min":0,"max":size-1
        },"id": 42
      }
    const headers={
        'Content-Type': 'application/json'
    }
    return fetch("https://api.random.org/json-rpc/4/invoke",{
        method:"POST",headers,body:JSON.stringify(data)
    }).then(res => res.text()).then(JSON.parse).then(res => res.result.random.data[0]).then(parseInt)

}

const randomItem = list => nextRandom(list.length).then(int => list[int]);

document.getElementById("button").onclick = () => {
    board.getSelection().then(async items => {
        const stickyNotes = items.filter(item => item.type === 'sticky_note');
        const randomSticker = await randomItem(stickyNotes)
        board.viewport.zoomTo(randomSticker)
    })
}