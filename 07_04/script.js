/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let furniture = [
  "sofa",
  "bed",
  "chair",
  "table",
  "desk",
  "wadrobe",
  "bookcase",
  "drawers",
];

console.log(furniture);

furniture.pop();
console.log(furniture);

furniture.unshift("drawers");
console.log(furniture);

furniture.sort();
console.log(furniture);

let rmvItem = furniture.find((el) => el.length > 5);
console.log(rmvItem);

let rem = furniture.filter((el) => el != rmvItem);
console.log(rem);
