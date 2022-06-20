const container = document.getElementById("board");
const height = prompt("Please choose the size of the grid. (less than 50px)");
const width = height;
container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
container.style.gridTemplateRows = `repeat(${height}, 1fr)`;

for (let i = 0; i < height * width; i++) {
  const cell = document.createElement("div");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  cell.id = "cell";
  cell.style.backgroundColor = "white";
  container.appendChild(cell);
  cell.addEventListener("mouseenter", function onClick() {
    cell.style.backgroundColor = "black";
  });

  const reset = document.getElementById("reset");
  reset.addEventListener("click", function clearBoard() {
    cell.style.backgroundColor = "white";
  });

  const blackPen = document.getElementById("blackPen");
  blackPen.addEventListener("click", function onClick() {
    cell.addEventListener("mouseenter", function onClick() {
      cell.style.backgroundColor = "black";
    });
  });

  const randomColorPen = document.getElementById("randomColorPen");
  randomColorPen.addEventListener("click", function onClick() {
    cell.addEventListener("mouseenter", function onClick() {
      cell.style.backgroundColor = "#" + randomColor;
    });
  });
}
