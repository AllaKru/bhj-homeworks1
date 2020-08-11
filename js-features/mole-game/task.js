let countHole = document.getElementById("dead");
let countnoHole = document.getElementById("lost");
getHole = (index) => {
  return document.getElementById(`hole${index}`);
};

for (let index = 1; index <= 9; index++) {
  getHole(index).onclick = function () {
    if (getHole(index).className.includes("hole_has-mole")) {
      countHole.textContent++;
    } else {
      countnoHole.textContent++;
    }

    if (countnoHole.textContent == 5) {
      alert("Вы проиграли!");
      countHole.textContent = 0;
      countnoHole.textContent = 0;
    } else if (countHole.textContent == 10) {
      alert("Вы выиграли!");
      countHole.textContent = 0;
      countnoHole.textContent = 0;
    }
  };
}
