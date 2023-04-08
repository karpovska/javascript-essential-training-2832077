/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseenter", () => {
  gridContainer.style.outline = "10px solid olive";
});

gridContainer.addEventListener("mouseleave", () => {
  gridContainer.style.outline = "";
});

//select all grid cells
const gridCells = document.querySelectorAll(".cell");

//generate random hex color
const randomColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};

gridCells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    cell.style.outline = "4px solid #D0D050";
  });

  cell.addEventListener("mouseleave", () => {
    cell.style.outline = "";
  });

  cell.addEventListener("mousedown", () => {
    cell.style.backgroundColor = `#${randomColor()}`;
  });
});

//set a background theme when a specific key pressed
const body = document.querySelector("body");
body.addEventListener("keydown", (event) => {
  if (event.code === "KeyQ") {
    body.style.backgroundColor === ""
      ? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
      : (body.style.backgroundColor = "");
  }
});
