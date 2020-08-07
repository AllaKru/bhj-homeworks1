let countHole = parseInt(document.getElementById("dead").textContent);
let countnoHole = parseInt(document.getElementById("lost").textContent);

getHole = (index) => {
  return document.getElementById(`hole${index}`);
};

for (let index = 1; index <= 10; index++) {
  getHole(index).onclick = function () {
    if (hole.className.includes("hole_has-mole")) {
      countHole++;
    } else countnoHole++;
  };
}
if (countnoHole == 5) {
  countHole = 0;
  countnoHole = 0;
  alert("Вы проиграли!");
} else if (countHole == 10) {
  countHole = 0;
  countnoHole = 0;
  alert("Вы выиграли!");
}
