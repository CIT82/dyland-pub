let cat = document.getElementById('cat');
let scoreElement = document.getElementById('score');
let timeElement = document.getElementById('time');

let score = 0;
let timeLeft = 30; // 30 seconds timer
let speed = 1000; // initial speed of cat movement

function moveCat() {
    let x = Math.floor(Math.random() * (550));
    let y = Math.floor(Math.random() * (350));
    cat.style.left = x + 'px';
    cat.style.top = y + 'px';
}

function increaseSpeed() {
    if (speed > 300) {
        speed -= 50;
    }
}

function updateScore() {
    score++;
    scoreElement.textContent = score;
}

function startGame() {
    cat.addEventListener('click', () => {
        updateScore();
        increaseSpeed();
    });

    let gameInterval = setInterval(() => {
        moveCat();
    }, speed);

    let countdown = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(gameInterval);
            clearInterval(countdown);
            alert('Game Over! Your score is ' + score);
        }
    }, 1000);
}

startGame();
