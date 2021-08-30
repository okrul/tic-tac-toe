const playerX = 'x';
const playerO = 'o';
class TicTacToe {
    constructor() {

    }

    gameField = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    currPlayer = playerX;

    getCurrentPlayerSymbol() {
        return this.currPlayer;
        console.log(this.gameField);
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] === null) {
            this.gameField[rowIndex][columnIndex] = this.currPlayer;
            this.currPlayer = this.currPlayer == playerX ? playerO : playerX;    
        }            
    }

    isFinished() {
        return (this.noMoreTurns() || this.getWinner() != null);
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.gameField[i][0] == playerX & this.gameField[i][1] == playerX & this.gameField[i][2] == playerX) {
                return playerX;
            }
            else if (this.gameField[0][i] == playerX & this.gameField[1][i] == playerX & this.gameField[2][i] == playerX) {
                return playerX;
            }
            else if (this.gameField[i][0] == playerO & this.gameField[i][1] == playerO & this.gameField[i][2] == playerO) {
                return playerO;
            }
            else if (this.gameField[0][i] == playerO & this.gameField[1][i] == playerO & this.gameField[2][i] == playerO) {
                return playerO;
            }
        }

        if (this.gameField[0][0] == playerX & this.gameField[1][1] == playerX & this.gameField[2][2] == playerX) {
            return playerX;
        }
        else if (this.gameField[2][0] == playerX & this.gameField[1][1] == playerX & this.gameField[0][2] == playerX) {
            return playerX;
        }
        else if (this.gameField[0][0] == playerO & this.gameField[1][1] == playerO & this.gameField[2][2] == playerO) {
            return playerO; 
        }
        else if (this.gameField[2][0] == playerO & this.gameField[1][1] == playerO & this.gameField[0][2] == playerO) {
            return playerO; 
        }

        
        return null;
    }

    noMoreTurns() {
        let noTurns = true;
        for (let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if (this.gameField[i][j] === null) {
                    noTurns = false;
                }
            }
        }

        return noTurns;
    }

    isDraw() {
        if (this.noMoreTurns() & this.getWinner()===null) {
             return true;
        };

        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
