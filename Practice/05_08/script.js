/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

document.querySelector("input").classList.add("input", "left-strap");
console.log(document.querySelector("input").classList);

document.querySelector("input").classList.remove("input");
console.log(document.querySelector("input").classList);

document.querySelector("input").setAttribute("data-name", "leftLength");
console.log(document.querySelector("input").hasAttribute("data-name"));
console.log(document.querySelector("input").attributes);
console.log(document.querySelector("input").getAttribute("data-name"));
document.querySelector("input").setAttribute("data-name", "rightLength");
console.log(document.querySelector("input").getAttribute("data-name"));

document.querySelector("input").style.backgroundColor = "rebeccapurple";
console.log(document.querySelector("input").style);
