let countHole = document.getElementById("dead");
let countnoHole = document.getElementById("lost");
let countparseHole = parseInt(countHole.textContent);
let countparsenoHole = parseInt(countnoHole.textContent);
getHole = (index) => {
  return document.getElementById(`hole${index}`);
};

for (let index = 1; index <= 9; index++) {
  getHole(index).onclick = function () {
    countHole.textContent = countparseHole;
    countnoHole.textContent = countparsenoHole;
    if (getHole(index).className.includes("hole_has-mole")) {
      countparseHole++;
    } else {
      countparsenoHole++;
    }

    if (countparsenoHole == 5) {
      alert("Вы проиграли!");
      countparseHole = 0;
      countparsenoHole = 0;
    } else if (countparseHole == 10) {
      alert("Вы выиграли!");
      countparseHole = 0;
      countparsenoHole = 0;
    }
  };
}
