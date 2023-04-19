/**
 * Challenge: Create an event listener
 * - Find the two elements with the .backpack__strap class.
 * - Create a function to output the strap length form.
 * - Iterate through each item with the .backpack__strap class.
 * - Capture the value of the data-side attribute to indicate the strap side.
 * - Create a form element.
 * - Populate the form with an input and a submit button.
 * - Add event listener to each of the strap length forms.
 * - Update strap length value with value submitted from form.
 */
import backpackObjectArray from "./components/data.js";

/**
 * Add event listener to the lid-toggle button.
 */
const lidToggle = function (event, button, newArg) {
  console.log(event);
  console.log(newArg);

  // Find the current backpack object in backpackObjectArray
  let backpackObject = backpackObjectArray.find(
    ({ id }) => id === button.parentElement.id
  );

  // Toggle lidOpen status
  backpackObject.lidOpen == true
    ? (backpackObject.lidOpen = false)
    : (backpackObject.lidOpen = true);

  // Toggle button text
  button.innerText == "Open lid"
    ? (button.innerText = "Close lid")
    : (button.innerText = "Open lid");

  // Set visible property status text
  let status = button.parentElement.querySelector(".backpack__lid span");
  status.innerText == "closed"
    ? (status.innerText = "open")
    : (status.innerText = "closed");
};

const backpackList = backpackObjectArray.map((backpack) => {
  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack");
  backpackArticle.setAttribute("id", backpack.id);

  //- Create a function to output the strap length form.
  const newStrapLength = (strapsArr) => {
    //- Iterate through each item with the .backpack__strap class.
    // console.log(strapsArr);
    [...strapsArr].forEach((strap) => {
      // - Capture the value of the data-side attribute to indicate the strap side.
      let strapSide = strap.getAttribute("data-side");
      // console.log(strapSide);

      // * - Create a form element.
      let strapLengthForm = document.createElement("form");
      strapLengthForm.classList.add(`${strapSide}length`);

      // * - Populate the form with an input and a submit button.
      strapLengthForm.innerHTML = `
      <input type="number" name="${strapSide}Length" placeholder="New ${strapSide} strap length">
      <button>Submit</button>`;

      //Add form to the end of the strap list element
      strap.append(strapLengthForm);

      //- Add event listener to each of the strap length forms.

      strapLengthForm.addEventListener("submit", (event) => {
        console.log(event);
        //stop form from reloading the page
        event.preventDefault();

        //get the value from the input
        let newLength = strapLengthForm.querySelector("input").value;

        //* - Update strap length value with value submitted from form.
        strap.querySelector("span").innerHTML = `${newLength} inches`;

        //clear the from after submit
        strapLengthForm.querySelector("input").value = "";
      });
    });
  };

  backpackArticle.innerHTML = `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="feature backpack__strap" data-side="left">Left strap length: <span>${
        backpack.strapLength.left
      } inches</span></li>
      <li class="feature backpack__strap" data-side="right">Right strap length: <span>${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status: <span>${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
    <button class="lid-toggle">Open lid</button>
  `;

  //- Find the two elements with the .backpack__strap class.
  let straps = backpackArticle.querySelectorAll(".backpack__strap");
  newStrapLength(straps);

  let button = backpackArticle.querySelector(".lid-toggle");
  let newArg = "The argument I want to pass to the callback function!";

  // Add event listener
  button.addEventListener("click", (event) => {
    lidToggle(event, button, newArg);
  });

  return backpackArticle;
});

// Append each backpack item to the main
const main = document.querySelector(".maincontent");

backpackList.forEach((backpack) => {
  main.append(backpack);
});
