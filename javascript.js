let board = document.getElementById("board");
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  square.id = "gridBlock";
  square.style.backgroundColor = "blue";
  board.insertAdjacentElement("beforeend", square);
  square.addEventListener("mousedown", function onClick() {
    square.style.backgroundColor = "red";
  });
}
