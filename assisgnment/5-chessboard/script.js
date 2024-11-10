const inputField = document.getElementById('board-size');
const printBtn = document.getElementById('print-btn');
const resetBtn = document.getElementById('reset-btn');
const resultBox = document.getElementById('result-box');

const emptyBox = () => {
    resultBox.innerHTML = '';
}

const newLine = () => {
    resultBox.innerHTML += '<br>'
}
printBtn.addEventListener('click', () => {
    emptyBox();
    const boardSize = Number(inputField.value);
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (i % 2 == 0) {
                if (j % 2 == 0) resultBox.innerHTML += '*';
                else resultBox.innerHTML += '#';
            }
            else {
                if (j % 2 == 0) resultBox.innerHTML += '#';
                else resultBox.innerHTML += '*';
            }
        }
        newLine();
    }
});

resetBtn.addEventListener('click', emptyBox);