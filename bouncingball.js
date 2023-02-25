var ball = document.createElement('div');
ball.style.position = 'absolute';
ball.style.width = '20px';
ball.style.height = '20px';
ball.style.backgroundColor = 'red';
ball.style.borderRadius = '10px';
document.body.appendChild(ball);

var x = 0;
var y = 0;
var xDirection = 1;
var yDirection = 1;

function moveBall() {
  x += xDirection;
  y += yDirection;
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
  if (x > window.innerWidth - 20) {
    xDirection = -1;
  }
  if (x < 0) {
    xDirection = 1;
  }
  if (y > window.innerHeight - 20) {
    yDirection = -1;
  }
  if (y < 0) {
    yDirection = 1;
  }
}

setInterval(moveBall, 10);
