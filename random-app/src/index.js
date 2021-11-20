const { board } = window.miro;

async function init() {
  await board.ui.on("icon:click", async () => {
    await board.ui.openPanel({ pageUrl: "app.html" });
  });
}

init();
