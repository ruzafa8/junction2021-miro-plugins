const { board } = window.miro;

const columnWidth = 150;
const rowHeight = 100;
const fontSize = 36;

const stickers = [];
document.getElementById("btn").onclick = () => {
  for(let x = 0; x < 3; x++) {
    for(let y = 0; y < 3; y++) {
      board.createStickyNote({
        x:x*columnWidth,
        y:y*rowHeight + 50*y,
        width:columnWidth,
        height:rowHeight
      }).then(sticker => stickers.append(sticker))
    }
  }
}
