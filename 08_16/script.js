/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */

import backpackObjectArray from "./components/data.js";

const content = backpackObjectArray.map((backpack) => {
  const newArticle = document.createElement("article");
  newArticle.classList.add("backpack");
  newArticle.setAttribute("id", backpack.id);

  newArticle.innerHTML = `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        backpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>

  `;
  return newArticle;
});

const main = document.querySelector(".maincontent");

content.forEach((backpack) => {
  main.append(backpack);
});

/* const main = document.querySelector(".maincontent");

console.log(backpackObjectArray);

for (const backpack in backpackObjectArray) {
  const backpack = backpackObjectArray[backpack];
  const newArticle = document.createElement("article");
  newArticle.classList.add("backpack");
  newArticle.setAttribute("id", backpack.id);

  const content = `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        backpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  
`;

  newArticle.innerHTML = content;
  main.append(newArticle);
    }*/
