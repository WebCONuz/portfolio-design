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

  // -----------------------------------------------------------
  // Team slider -----------------------------------------------
  // -----------------------------------------------------------
  const owl1 = $(".blog-carousel");
  owl1.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
});
