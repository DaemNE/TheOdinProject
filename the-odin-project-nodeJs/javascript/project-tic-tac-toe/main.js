var Game = (() => {
    let scoreX = 0;
    let scoreO = 0;
    let gameValues = ["", "", "", "", "", "", "", "", ""];
    let turn
    const gameBoard = document.querySelector(".gameBoard");

    const render = (gameValues) => {
        let allCells = document.querySelectorAll("cell")
        for (i in gameValues) {
            let cell = document.getElementById(`${i}`).textContent = gameValues[i];
        };
    };

    const pickStarter = () => {
        let headsOrTails = Math.floor(Math.random() * 2)
        if (headsOrTails == 1) {
            turn = "X"
        } else {
            turn = "O"
        };
    };

    const checkValidity = (id) => {
        if (!document.getElementById(id).textContent) {
            return true
        } else {
            return false
        };
    };

    const updateTurn = () => {
        if (turn === "X") {
            turn = "O";
        } else {
            turn = "X"
        };
    };

    const checkForWin = () => {
        let horizontalTop = [gameValues[0], gameValues[1], gameValues[2]];
        let horizontalMiddle = [gameValues[3], gameValues[4], gameValues[5]];
        let horizontalBottom = [gameValues[6], gameValues[7], gameValues[8]];
        let verticalLeft = [gameValues[0], gameValues[3], gameValues[6]];
        let verticalMiddle = [gameValues[1], gameValues[4], gameValues[7]];
        let verticalRight = [gameValues[2], gameValues[5], gameValues[8]];
        let diagonalLeft = [gameValues[0], gameValues[4], gameValues[8]];
        let diagonalRight = [gameValues[2], gameValues[4], gameValues[6]];

        if ((horizontalTop[0] == horizontalTop[1]) && (horizontalTop[1] == horizontalTop[2]) && (horizontalTop[0] != "")) {

            if (turn == "O") {
                scoreX++;
            } else {
                scoreO++;
            };
            reset()
        };

        if ((horizontalMiddle[0] == horizontalMiddle[1]) && (horizontalMiddle[1] == horizontalMiddle[2]) && (horizontalMiddle[0] != "")) {

            if (turn == "O") {
                scoreX++;
            } else {
                scoreO++;
            };
            reset()
        };

        if ((horizontalBottom[0] == horizontalBottom[1]) && (horizontalBottom[1] == horizontalBottom[2]) && (horizontalBottom[0] != "")) {

            if (turn == "O") {
                scoreX++;
            } else {
                scoreO++;
            };
            reset()
        };

        if ((verticalLeft[0] == verticalLeft[1]) && (verticalLeft[1] == verticalLeft[2]) && (verticalLeft[0] != "")) {

            if (turn == "O") {
                scoreX++;
            } else {
                scoreO++;
            };
            reset()
        };

        if ((verticalMiddle[0] == verticalMiddle[1]) && (verticalMiddle[1] == verticalMiddle[2]) && (verticalMiddle[0] != "")) {

            if (turn == "O") {
                scoreX++;
            } else {
                scoreO++;
            };
            reset()
        };

        if ((verticalRight[0] == verticalRight[1]) && (verticalRight[1] == verticalRight[2]) && (verticalRight[0] != "")) {

            if (turn == "O") {
                scoreX++;
            } else {
                scoreO++;
            };
            reset()
        };

        if ((diagonalLeft[0] == diagonalLeft[1]) && (diagonalLeft[1] == diagonalLeft[2]) && (diagonalLeft[0] != "")) {

            if (turn == "O") {
                scoreX++;
            } else {
                scoreO++;
            };
            reset()
        };

        if ((diagonalRight[0] == diagonalRight[1]) && (diagonalRight[1] == diagonalRight[2]) && (diagonalRight[0] != "")) {

            if (turn == "O") {
                scoreX++;
            } else {
                scoreO++;
            };
            reset()
        };

    };

    const updateScore = () => {
        document.querySelector(".scoreBoard").textContent = `It is ${turn}'s turn. The current score: X=${scoreX} O=${scoreO}`;
    }

    const update = () => {
        updateTurn();
        render(gameValues);
        checkForWin();
        updateScore();
        console.log("updated");
    };

    const playGame = () => {
        document.getElementById("overlay").classList = ""
        gameValues = ["", "", "", "", "", "", "", "", ""];
        update()
    }

    const resetScore = () => {
        scoreO = "0";
        scoreX = "0";
        playGame()
    }

    const reset = () => {
        let winner = turn == "X" ? "O" : "X"
        document.getElementById("overlay").classList = "displayOff block"
        document.querySelector(".endGameText").textContent = `Player "${winner}" Has won! Play again?`
    };

    const one = () => {
        if (checkValidity(0)) {
            gameValues.splice(0, 1, turn)
            update()
        }
    }

    const two = () => {
        if (checkValidity(1)) {
            gameValues.splice(1, 1, turn)
            update()
        }
    }
    const three = () => {
        if (checkValidity(2)) {
            gameValues.splice(2, 1, turn)
            update()
        }
    }
    const four = () => {
        if (checkValidity(3)) {
            gameValues.splice(3, 1, turn)
            update()
        }
    }
    const five = () => {
        if (checkValidity(4)) {
            gameValues.splice(4, 1, turn)
            update()
        }
    }
    const six = () => {
        if (checkValidity(5)) {
            gameValues.splice(5, 1, turn)
            update()
        }
    }
    const seven = () => {
        if (checkValidity(6)) {
            gameValues.splice(6, 1, turn)
            update()
        }
    }
    const eigth = () => {
        if (checkValidity(7)) {
            gameValues.splice(7, 1, turn)
            update()
        }
    }
    const nine = () => {
        if (checkValidity(8)) {
            gameValues.splice(8, 1, turn)
            update()
        }
    }

    return {
        update,
        pickStarter,
        reset,
        playGame,
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eigth,
        nine,
        resetScore,
    };

})();

Game.pickStarter()
Game.update()