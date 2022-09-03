const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
};

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
};

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            player.display.textContent = player.score;
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;

    }
}
let winningScore = 5;
let isGameOver = false;
p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();

});
p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}