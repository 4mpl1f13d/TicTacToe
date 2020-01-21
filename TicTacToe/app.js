// let btn = document.querySelector('button');
// btn.addEventListener("click", function () {
//     alert('Hello World!');
// });

// <!-- JS TTT test -->
let cells = document.querySelectorAll('.cell');
let turnCounter = 0;
let winningCombos = [
    // horizontal check
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    // vertical check
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    // diagonal check
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
];

// <!-- JS TTT test -->
cells.forEach(function (cell) {
    cell.addEventListener("click", cellClicked);
});
// <!-- JS TTT test -->
function cellClicked(e) {
    if (turnCounter % 2 === 0) {
        e.target.textContent = "X"
    } else {
        e.target.textContent = "O"
    }
    checkWin();
    turnCounter++;
    if (turnCounter === 9) {
        alert('--- TIE GAME ---');
        // // alert(e.target.textContent);
        // e.target.textContent = 'Hello!'
    }
}

//check for winner
function checkWin() {
    for (let i = 0; i < winningCombos.length; i++) {
        let xSum = 0;
        for (let h = 0; h < winningCombos[i].length; h++) {
            //check Player X
            if (winningCombos[i][h].textContent === "X") {
                xSum++;
            }
            if (xSum == 3) {
                alert("~~ Player X Wins!!! ~~");
            }
        }
    }

    for (let l = 0; l < winningCombos.length; l++) {
        let oSum = 0;
        for (let j = 0; j < winningCombos[l].length; j++) {
            //check Player O
            if (winningCombos[l][j].textContent === "O") {
                oSum++;
            }
            if (oSum == 3) {
                alert("~~ Player O Wins!!! ~~");
            }
        }
    }
}




