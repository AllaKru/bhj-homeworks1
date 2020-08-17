let modalWindow = Array.from(document.getElementsByClassName("modal"));
let modalClose = Array.from(document.getElementsByClassName("modal__close"));
let showSuccess = Array.from(document.getElementsByClassName("show-success"));

for (let k = 1; k < modalWindow.length; k++) {
  modalWindow[0].classList.add("modal_active");
  for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function () {
      for (let j = 0; j < modalWindow.length; j++) {
        modalWindow[j].classList.remove("modal_active");
      }
    };
    showSuccess[0].onclick = function () {
      modalWindow[0].classList.remove("modal_active");//не получается без этого удаления...
      modalWindow[k].classList.add("modal_active");
    };
  }
}
