"use strict";
let menuSub = Array.from(document.querySelectorAll("ul.menu.menu_sub"));
let menuLink = Array.from(document.querySelectorAll(".menu__link"));

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = function () {
    const subMenu = menuLink[i]
      .closest(".menu__item")
      .querySelector(".menu_sub");

    if (subMenu) {
      subMenu.classList.add("menu_active");
    }
    const result = menuSub.find((elems) =>
      elems.classList.contains("menu_active")
    );

    if (result) {
      result.classList.remove("menu_active");

      if (menuLink[i].nextElementSibling === result) {
        result.classList.add("menu_active");

        console.log(result);
        return false;
      }
    }
  };
}
