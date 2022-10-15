/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const book = {
  name: "Child of the North",
  author: "Edith Pattou",
  translator: "Tetiana Jevlojeva",
  cover: "hard",
  pagesNum: 416,
};

console.log("Object:", book);
console.log("Num of pages:", book.pagesNum);

const pot = {
  size: "4L",
  material: "stainell steel",
  hasLid: true,
  dish: {
    name: "soup",
    color: "multicolor",
    mainIngredient: "vegetables",
    level: "easy",
  },
};

console.log("Object:", pot);
console.log("Has a lid:", pot.hasLid);
console.log("A dish inside:", pot.dish.name);
