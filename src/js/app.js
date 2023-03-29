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

  const showAboutBtn = document.querySelector(".show-data");
  const showAboutIcon = document.querySelector(".show-data > i");
  const aboutData = document.querySelector(".about-data");
  showAboutBtn.addEventListener("click", function () {
    if (aboutData.classList.contains("-left-full")) {
      replaceClass(aboutData, ["-left-full"], ["left-0"]);
      replaceClass(showAboutIcon, ["bxs-user-detail"], ["bxs-user-x"]);
    } else {
      replaceClass(aboutData, ["left-0"], ["-left-full"]);
      replaceClass(showAboutIcon, ["bxs-user-x"], ["bxs-user-detail"]);
    }
  });

  const showMenuBtn = document.querySelector(".show-menu");
  const showMenuIcon = document.querySelector(".show-menu > i");
  const menuData = document.querySelector(".right-aside");
  showMenuBtn.addEventListener("click", function () {
    if (menuData.classList.contains("h-auto")) {
      replaceClass(menuData, ["h-auto"], ["h-hidden"]);
      replaceClass(
        showMenuIcon,
        ["bx-x", "scale-110"],
        ["bx-menu", "scale-110"]
      );
    } else {
      replaceClass(menuData, ["h-hidden"], ["h-auto"]);
      replaceClass(
        showMenuIcon,
        ["bx-menu", "scale-110"],
        ["bx-x", "scale-110"]
      );
    }
  });

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
