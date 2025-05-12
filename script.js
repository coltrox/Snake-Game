const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const box = 20;
const canvasSize = 400;
let snake = [{ x: 200, y: 200 }];
let direction = 'RIGHT';
let food = {};
let score = 0;
let snakeColor = '#00cc00';
let gameLoop;

function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, box, box);
  
    ctx.strokeStyle = "#ffffff";
    ctx.shadowColor = color;
    ctx.shadowBlur = 12;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x, y, box, box);
  
    
    ctx.shadowBlur = 0;
  }
  
  

function randomPosition() {
  return Math.floor(Math.random() * (canvasSize / box)) * box;
}

function placeFood() {
  food = {
    x: randomPosition(),
    y: randomPosition(),
    color: '#' + Math.floor(Math.random() * 16777215).toString(16)
  };
}

function draw() {
  ctx.clearRect(0, 0, canvasSize, canvasSize);

  
  drawSquare(food.x, food.y, food.color);

  
  snake.forEach(segment => drawSquare(segment.x, segment.y, snakeColor));

  
  const head = { ...snake[0] };
  if (direction === 'LEFT') head.x -= box;
  if (direction === 'RIGHT') head.x += box;
  if (direction === 'UP') head.y -= box;
  if (direction === 'DOWN') head.y += box;

  
  if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
    gameOver();
    return;
  }

  
  if (head.x === food.x && head.y === food.y) {
    score += 10;
    document.getElementById('score').textContent = 'Pontuação: ' + score;
    placeFood();
  } else {
    snake.pop(); 
  }

  snake.unshift(head);
}

function changeDirection(e) {
  const key = e.key;
  if (key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
  if (key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
  if (key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
  if (key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
}

function startGame() {
  snakeColor = document.getElementById('snakeColor').value;
  snake = [{ x: 200, y: 200 }];
  direction = 'RIGHT';
  score = 0;
  document.getElementById('score').textContent = 'Pontuação: 0';
  document.getElementById('gameOverMsg').textContent = '';
  placeFood();
  clearInterval(gameLoop);
  gameLoop = setInterval(draw, 100);
  document.addEventListener('keydown', changeDirection);
}

function gameOver() {
  clearInterval(gameLoop);
  document.getElementById('gameOverMsg').textContent = 'Game Over! Pressione "Iniciar Jogo" para jogar novamente.';
}
