/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */

import backpackObjectArray from "./components/data.js";

const main = document.querySelector(".maincontent");

console.log(backpackObjectArray);

for (const backpack in backpackObjectArray) {
  const newBackpack = backpackObjectArray[backpack];
  const newArticle = document.createElement("article");
  newArticle.classList.add("backpack");
  newArticle.setAttribute("id", newBackpack.id);

  const content = `
    <figure class="backpack__image">
      <img src=${newBackpack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${newBackpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        newBackpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        newBackpack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${newBackpack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        newBackpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        newBackpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        newBackpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        newBackpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  
`;

  newArticle.innerHTML = content;
  main.append(newArticle);
}
