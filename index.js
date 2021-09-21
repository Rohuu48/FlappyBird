let gameBoard = document.getElementById("game-board");
let block = document.getElementById("block");
let hole = document.getElementById("hole");
let bird = document.getElementById("bird");
let jumping = false;
let score = 0;
let isGameOver = false;
let isCollidingWithBlock = false;
let isCollidingWithHole = false;

console.log(hole);
document.addEventListener("animationiteration", function () {
  let randomTopValue = -(Math.random() * 300 + 150);
  hole.style.top = randomTopValue + "px";
  score++;
  console.log(score);
});

gameBoard.addEventListener("click", jump);

//Gravity functionality
setInterval(function () {
  let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  if (!jumping) {
    let newTop = birdTop + 3;
    bird.style.top = newTop + "px";
  }
  isGameOver = checkGameOver();
  if (isGameOver) {
    alert(`Game over. Score: ${score}`);
    bird.style.top = 100 + "px";
    score = 0;
  }
}, 10);

function checkGameOver() {
  isCollidingWithBlock = checkCollision();
  isCollidingWithHole = collisionWithHole();
  let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

  if (birdTop > 480 || (isCollidingWithBlock && isCollidingWithHole)) {
    return true;
  }
}

function checkCollision() {
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > -50) {
    return true;
  }
}

function collisionWithHole() {
  let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));

  let tempTop = -(500 - birdTop);
  if (tempTop > holeTop + 130 || tempTop < holeTop) {
    return true;
  }
}

function jump() {
  jumping = true;
  let jumpFnCount = 0;
  let jumpInterval = setInterval(function () {
    let birdTop = parseInt(
      window.getComputedStyle(bird).getPropertyValue("top")
    );
    if (birdTop > 6 && jumpFnCount < 10) {
      let newTop = birdTop - 5;
      console.log(birdTop, newTop);
      bird.style.top = newTop + "px";
    }

    if (jumpFnCount > 20) {
      jumping = false;
      clearInterval(jumpInterval);
      jumpFnCount = 0;
    }

    console.log("jump", bird.style.top);
    jumpFnCount++;
  }, 10);
}
