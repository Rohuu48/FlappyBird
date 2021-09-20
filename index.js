let gameBoard = document.getElementById("game-board");
let hole = document.getElementById("hole");
let bird = document.getElementById("bird");

console.log(hole);
document.addEventListener("animationiteration", function () {
  let randomTopValue = -(Math.random() * 300 + 150);
  hole.style.top = randomTopValue + "px";
});

gameBoard.addEventListener("click", jump);

//Gravity functionality
setInterval(function () {
  let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  let newTop = birdTop + 2;
  bird.style.top = newTop + "px";
}, 10);

function jump() {
  setInterval(function () {
    let birdTop = parseInt(
      window.getComputedStyle(bird).getPropertyValue("top")
    );
    let newTop = birdTop - 5;
    console.log(birdTop, newTop);
    bird.style.top = newTop + "px";
    console.log("jump", bird.style.top);
  }, 10);
}
