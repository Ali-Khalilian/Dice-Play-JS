var scores, roundScore, activePlayer, gameplay;
function init() {
    gameplay = true;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById("score--0").textContent = "0";
    document.getElementById("score--1").textContent = "0";
    document.getElementById("current--0").textContent = "0";
    document.getElementById("current--1").textContent = "0";
    document.querySelector(".dice").style.display = "none";
}
init();

document.querySelector(".btn--roll").addEventListener("click", function () {
    if (gameplay) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDom = document.querySelector(".dice");
        diceDom.style.display = "block";
        diceDom.src = `/img/dice-${dice}.png`;
        if (dice !== 1) {
            roundScore += dice;
            document.getElementById("current--" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
    if (gameplay) {
        scores[activePlayer] += roundScore;
        var win = document.getElementById("score--" + activePlayer).textContent = scores[activePlayer];
        nextPlayer();
        if (win >= 10) {
            scores[0] >= 10 ? document.querySelector(".player--0").classList.add("player--winner") : document.querySelector(".player--1").classList.add("player--winner");
            gameplay = false;
            document.querySelector(".dice").style.display = "none";
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById("current--0").textContent = "0";
    document.getElementById("current--1").textContent = "0";
    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");
};

document.querySelector(".btn--new").addEventListener('click', function () {
    init();
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.remove("player--active");
    document.querySelector(".player--0").classList.add("player--active");
    document.querySelector(".player--0").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--winner");
    
});