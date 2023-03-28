// LOADING PAGE -----------------
window.addEventListener("load", loading);
function loading() {
  let loader = document.querySelector(".loader");
  loader.style.cssText = "opacity: 0; visibility: hidden;";
}

// AFTER lOAD HTML DOCUMENT
window.addEventListener("DOMContentLoaded", function () {
  function replaceClass(element, delClassArr, addClassArr) {
    element.classList.remove(...delClassArr);
    element.classList.add(...addClassArr);
  }
  function arrReplaceClass(arr, delClassArr, addClassArr) {
    arr.forEach((item) => {
      replaceClass(item, delClassArr, addClassArr);
    });
  }
});
