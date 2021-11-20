const { board } = window.miro;

const columnWidth = 150;
const rowHeight = 100;
const fontSize = 36;

const stickers = [];
document.getElementById("btn").onclick = async () => {
  for(let x = 0; x < 3; x++) {
    for(let y = 0; y < 3; y++) {
      console.log("creating sticker at", x, y)
      stickers.push({x,y,id:(await board.createStickyNote({
        x:x*columnWidth,
        y:y*rowHeight + 50*y,
        width:columnWidth,
        height:rowHeight
      })).id})
      console.log("created sticker at", x, y)

    }
  }
  console.log(stickers);
}
document.getElementById("read").onclick = () => {
  const x = parseInt(document.getElementById("x").value);
  const y = parseInt(document.getElementById("y").value);
  console.log(x,y);
  const {id} = stickers.find(sticker => sticker.x == x && sticker.y == y);
  console.log(id);
  board.getById(id).then(sticker => {
    console.log(sticker.content);
  })
}
