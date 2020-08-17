let menuSub = Array.from(document.querySelectorAll("ul.menu.menu_sub"));
let menuLink = Array.from(document.querySelectorAll(".menu__link"));
let menuItem = Array.from(document.querySelectorAll(".menu__item"));

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = function () {
    for (let j = 0; j < menuSub.length; j++) {
      if (
        menuLink[i].closest(".menu__item") === menuItem[i] && //наверное есть проще способ
        menuSub[j].closest(".menu__item") === menuItem[i]
      ) {
        menuSub[j].classList.toggle("menu_active");
        return false;
      }
      if (menuSub[j].classList.contains("menu_active")) {
        menuSub[j].classList.remove("menu_active");// не до конца правильно работает
        
      }
    }
  };
}
