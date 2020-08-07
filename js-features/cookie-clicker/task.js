let cookies = document.getElementById("cookie");
let clickCount = document.getElementById("clicker__counter");
let speedCount = document.getElementById("clicker__speed");
let parseCount = parseInt(clickCount.textContent);
let parsespeedCount = parseInt(speedCount.textContent);
let firstClick, secondClick;

cookies.onclick = function () {
  if (this.width === 200) {
    this.width += 20;
    this.height += 20;
    firstClick = new Date().getTime();
  } else {
    this.width -= 20;
    this.height -= 20;
    secondClick = new Date().getTime();
  }
  if (secondClick > firstClick) {
    let time = secondClick - firstClick;
  } else time = firstClick - secondClick;

  parseCount += 1;
  clickCount.textContent = parseCount;
  parsespeedCount = (1 / (time / 1000)).toFixed(2);// попыталась реализовать «Скорость клика»
  speedCount.textContent = parsespeedCount;
  console.log(new Date().getTime());
  console.log(time);
};
