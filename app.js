const pl1 = document.querySelector('#pl1');
const pl2 = document.querySelector('#pl2');
const plBtn1 = document.querySelector('#pl1_Btn');
const plBtn2 = document.querySelector('#pl2_Btn');
const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

let resetToZero = 0;
let pl1Score = 0;
let pl2Score = 0;
let isGameOver = false;
let winningScore = 1;


winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(winningScoreSelect.value);
    RESET();
})




plBtn1.addEventListener('click', function() {
    if (!isGameOver) {
        pl1Score += 1;
        if (pl1Score === winningScore) {
            isGameOver = true;
            pl1.classList.add('has-text-success');
            pl2.classList.add('has-text-danger');
            plBtn1.disabled = true;
            plBtn2.disabled = true;

        }
        pl1.textContent = pl1Score;
    }

});


plBtn2.addEventListener('click', function() {
    if (!isGameOver) {
        pl2Score += 1;
        if (pl2Score === winningScore) {
            isGameOver = true;
            pl2.classList.add('has-text-success');
            pl1.classList.add('has-text-danger');
            plBtn1.disabled = true;
            plBtn2.disabled = true;
        }
        pl2.textContent = pl2Score;

    }

});


resetBtn.addEventListener('click', RESET)


function RESET() {
    isGameOver = false;
    pl1Score = 0;
    pl2Score = 0;
    pl1.textContent = pl1Score;
    pl2.textContent = pl2Score;
    pl1.classList.remove('has-text-success', 'has-text-danger');
    pl2.classList.remove('has-text-success', 'has-text-danger');

    plBtn2.disabled = false;
    plBtn1.disabled = false;
}



const delayColorChange = (color, delay) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)

    })

}






delayColorChange('red', 1000)
    .then(() => delayColorChange('blue', 1000))
    .then(() => delayColorChange('brown', 1000))
    .then(() => delayColorChange('yellow', 1000))
    .then(() => delayColorChange('green', 1000))
    .then(() => delayColorChange('white', 1000))
    .then(() => delayColorChange('blue', 1000))
    .then(() => delayColorChange('brown', 1000))
    .then(() => delayColorChange('yellow', 1000))
    .then(() => delayColorChange('green', 1000))
    .then(() => delayColorChange('white', 1000))