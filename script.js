const container = document.querySelector("#container");
const button = document.querySelector("#new-grid");

function createGrid(size) {
  container.innerHTML = ""; // remove the old grid

  const squareSize = 100 / size; // each square's share, as a percentage

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.flex = `0 0 ${squareSize}%`;
    square.style.height = `${squareSize}%`;

    square.addEventListener("mouseenter", () => {
      square.classList.add("hovered");
    });

    container.appendChild(square);
  }
}

button.addEventListener("click", () => {
  const input = prompt("Number of squares per side (max 100):");
  if (input === null) return; // user pressed Cancel

  const size = parseInt(input, 10);

  if (Number.isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a whole number between 1 and 100.");
    return;
  }

  createGrid(size);
});

createGrid(16); // initial grid on page load
