/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function addClass() {
  document.querySelector("main").classList.add("container");
  console.log(document.querySelector("main").classList);
}
addClass();

const addAnotherClass = function () {
  document.querySelector("main").classList.add("left-box");
  console.log(document.querySelector("main").classList);
};
addAnotherClass();

(function () {
  document.querySelector("main").classList.add("main");
  console.log(document.querySelector("main").classList);
})();
