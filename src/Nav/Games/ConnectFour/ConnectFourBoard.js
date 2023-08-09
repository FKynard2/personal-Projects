import { useState, useReducer } from "react";
import { useEffect } from "react";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
    BoardToken,
    ButtonContainer,
    ConnectFourBoard,
    ConnectFourColumn,
    ConnectFourTile,
} from "../../../Styling/StyledComponents";

const NUM_ROW = 6;
const NUM_COL = 7;
const WINNER = 4;
var emptyBoard = [];
for (let i = 0; i < NUM_ROW; i++) {
    emptyBoard.push(new Array(NUM_COL).fill(0));
}

export default function ConnectFour({
    player1,
    player2,
    player1Border,
    player2Border,
    boardBorder,
    boardBackground
}) {
    const [{ isGameOver }, dispatchBoard] = useReducer(
        reducer,
        genEmptyState()
    );

    const [level, setLevel] = useState(0); // 0 for easy, 1 for medium, 2 for hard
    const [board, setBoard] = useState(emptyBoard); // 0 for empty cell, 1 for you(black), 2 for opponent(red)
    const [yourTurn, setYourTurn] = useState(true); // true if your turn, false if opponent's
    const [winner, setWinner] = useState(0); // 0 no one/game still going, 1 you, 2 opponent, 3 tie

    const ResetClickHandler = () => {
        setBoard(emptyBoard);
        setYourTurn(true);
        setWinner(0);
    };
    const levelClick = (buttonNum) => {
        setLevel(buttonNum);
        ResetClickHandler();
    };

    return (
        <>
            <ButtonContainer>
                <Button
                    style={{
                        color: `${boardBackground}`,
                        textAlign: "center",
                        padding: ".5rem",
                        backgroundColor: `${boardBorder}`,
                    }}
                    disabled={level === 0}
                    onClick={() => levelClick(0)}
                >
                    Easy
                </Button>
                <Button
                    style={{
                        color: `${boardBackground}`,
                        textAlign: "center",
                        padding: ".5rem",
                        backgroundColor: `${boardBorder}`,
                    }}
                    disabled={level === 1}
                    onClick={() => levelClick(1)}
                >
                    Medium
                </Button>
                <Button
                    style={{
                        color: `${boardBackground}`,
                        textAlign: "center",
                        padding: ".5rem",
                        backgroundColor: `${boardBorder}`,
                    }}
                    disabled={level === 2}
                    onClick={() => levelClick(2)}
                >
                    Hard
                </Button>
                <Button
                    style={{
                        color: `${boardBackground}`,
                        textAlign: "center",
                        padding: ".5rem",
                        backgroundColor: `${boardBorder}`,
                    }}
                    disabled={level === 3}
                    onClick={() => levelClick(3)}
                >
                    PVP
                </Button>
            </ButtonContainer>

            {yourTurn === true && winner === 0 && (
                <Typography
                    variant="h3"
                    style={{
                        color: `${player1}`,
                        textAlign: "center",
                        padding: "1rem",
                    }}
                >
                    Player 1's Turn
                </Typography>
            )}
            {yourTurn !== true && winner === 0 && (
                <Typography
                    variant="h3"
                    style={{
                        color: `${player2}`,
                        textAlign: "center",
                        padding: "1rem",
                    }}
                >
                    Player 2's Turn
                </Typography>
            )}
            {winner === 1 && (
                <Typography
                    variant="h3"
                    style={{
                        color: `${player1}`,
                        textAlign: "center",
                        padding: "1rem",
                    }}
                >
                    Player {winner} Wins
                </Typography>
            )}
            {winner === 2 && (
                <Typography
                    variant="h3"
                    style={{
                        color: `${player2}`,
                        textAlign: "center",
                        padding: "1rem",
                    }}
                >
                    Player {winner} Wins
                </Typography>
            )}
            {isGameOver === true && winner == null && (
                <Typography
                    variant="h3"
                    style={{
                        color: `${boardBorder}`,
                        textAlign: "center",
                        padding: "1rem",
                    }}
                >
                    Game Over!
                </Typography>
            )}
            <ConnectFourBoard>
                {board[0].map((_, colIndex) => {
                    return (
                        <Column
                            player1={player1}
                            player2={player2}
                            player1Border={player1Border}
                            player2Border={player2Border}
                            key={colIndex}
                            colIndex={colIndex}
                            board={board}
                            setBoard={setBoard}
                            yourTurn={yourTurn}
                            setYourTurn={setYourTurn}
                            level={level}
                            winner={winner}
                            setWinner={setWinner}
                            checkGameOver={checkGameOver}
                            bestPlacement={bestPlacement}
                            boardBorder={boardBorder}
                        />
                    );
                })}
            </ConnectFourBoard>
            <Switch
                onChange={() => {
                    ResetClickHandler();
                }}
                inputProps={{ "aria-label": "controlled" }}
            />

            <Typography sx={{ color: "white" }}>Clear Board</Typography>
        </>
    );
}
function Column({
    colIndex,
    board,
    setBoard,
    yourTurn,
    setYourTurn,
    level,
    winner,
    setWinner,
    checkGameOver,
    bestPlacement,
    player1,
    player2,
    player1Border,
    player2Border,
    boardBorder,
}) {
    const onClickCol = () => {
        if (winner !== 0) {
            return;
        }
        const newBoard = board.map((col) => col.slice());
        console.log(newBoard);
        const openRow = getEmptyRow(colIndex, newBoard);
        if (openRow === -1) {
            return;
        }

        if (yourTurn) {
            newBoard[openRow][colIndex] = 1;
        } else if (!yourTurn && level === 3) {
            newBoard[openRow][colIndex] = 2;
        }
        setBoard(newBoard);
        setYourTurn(!yourTurn);

        const whoWon = checkGameOver(openRow, colIndex, newBoard);

        if (whoWon !== 0) {
            setWinner(whoWon);
        }
    };

    useEffect(() => {
        if (!yourTurn && winner === 0 && level !== 3) {
            let delay;
            if (level === 0) {
                delay = 500;
            } else if (level === 1) {
                delay = 1000;
            } else {
                delay = 1500;
            }

            // Make the computer's move after a delay
            const timer = setTimeout(() => {
                const computerCol = bestPlacement(board, level * 2 + 1);
                const computerRow = getEmptyRow(computerCol, board);

                const newBoard = board.map((col) => col.slice());
                newBoard[computerRow][computerCol] = 2;

                setBoard(newBoard);
                setYourTurn(true);

                const whoWon = checkGameOver(
                    computerRow,
                    computerCol,
                    newBoard
                );
                if (whoWon !== 0) {
                    setWinner(whoWon);
                }
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [
        yourTurn,
        winner,
        board,
        setBoard,
        setYourTurn,
        level,
        bestPlacement,
        checkGameOver,
    ]);

    return (
        <ConnectFourColumn onClick={onClickCol}>
            {board.map((row, rowIdx) => {
                return (
                    <ConnectFourTile
                        key={rowIdx}
                        style={{ border: `4px solid ${boardBorder}` }}
                        className="tile"
                    >
                        {row[colIndex] == null && <div />}
                        {row[colIndex] === 1 && (
                            <BoardToken
                                style={{
                                    backgroundColor: `${player1}`,
                                    border: `4px solid ${player1Border}`,
                                }}
                            />
                        )}
                        {row[colIndex] === 2 && (
                            <BoardToken
                                style={{
                                    backgroundColor: `${player2}`,
                                    border: `4px solid ${player2Border}`,
                                }}
                            />
                        )}
                    </ConnectFourTile>
                );
            })}
        </ConnectFourColumn>
    );
}

function reducer(state, action) {
    switch (action.type) {
        case "restart":
            return genEmptyState();
        case "move":
            const relevantCol = state.board[action.colIndex];
            const colIsFull = relevantCol[0] != null;
            if (state.isGameOver || colIsFull) return state;

            const { board, currentPlayer } = state;

            const boardClone = [...board];
            const colClone = [...relevantCol];

            const rowIdx = colClone.lastIndexOf(null);
            colClone[rowIdx] = currentPlayer;
            boardClone[action.colIndex] = colClone;

            const didWinVertical = didWin(
                rowIdx,
                action.colIndex,
                1,
                0,
                boardClone,
                currentPlayer
            );
            const didWinHorizontal = didWin(
                rowIdx,
                action.colIndex,
                0,
                1,
                boardClone,
                currentPlayer
            );
            const didWinDiagnol =
                didWin(
                    rowIdx,
                    action.colIndex,
                    1,
                    1,
                    boardClone,
                    currentPlayer
                ) ||
                didWin(
                    rowIdx,
                    action.colIndex,
                    -1,
                    1,
                    boardClone,
                    currentPlayer
                );
            const winner =
                didWinDiagnol || didWinHorizontal || didWinVertical
                    ? currentPlayer
                    : null;

            const isBoardFull = boardClone.every((column) =>
                column.every((value) => value != null)
            );

            return {
                board: boardClone,
                currentPlayer: currentPlayer === 1 ? 2 : 1,
                winner,
                isGameOver: winner != null || isBoardFull,
            };
        default:
            throw new Error("Unexpected action type");
    }
}

function genEmptyState() {
    return {
        board: new Array(NUM_COL)
            .fill(null)
            .map((_) => new Array(NUM_ROW).fill(null)),
        currentPlayer: 1,
        winner: null,
        isGameOver: false,
    };
}

function didWin(
    startingRow,
    startingCol,
    rowIncrement,
    colIncrement,
    board,
    currentPlayer
) {
    let numInARow = 0;
    let currRow = startingRow;
    let currCol = startingCol;

    while (
        currCol < NUM_COL &&
        currRow < NUM_ROW &&
        board[currCol][currRow] === currentPlayer
    ) {
        numInARow++;
        currRow += rowIncrement;
        currCol += colIncrement;
    }
    currRow = startingRow - rowIncrement;
    currCol = startingCol - colIncrement;
    while (
        currCol >= 0 &&
        currRow >= 0 &&
        board[currCol][currRow] === currentPlayer
    ) {
        numInARow++;
        currRow -= rowIncrement;
        currCol -= colIncrement;
    }

    return numInARow >= WINNER;
}

const getEmptyRow = (colIndex, currBoard) => {
    for (var i = 5; i >= 0; i--) {
        if (currBoard[i][colIndex] === 0) {
            return i;
        }
    }
    return -1;
};

const checkVertWin = (row, col, currBoard) => {
    if (row > 2) {
        return false;
    }
    var furthestDownIndex = row + 3;
    var furthestUpIndex = row - 3;
    if (furthestDownIndex > 5) {
        furthestDownIndex = 5;
    }
    if (furthestUpIndex < 0) {
        furthestUpIndex = 0;
    }
    for (var i = furthestDownIndex; i >= furthestUpIndex + 3; i--) {
        if (
            currBoard[i][col] === currBoard[i - 1][col] &&
            currBoard[i - 1][col] === currBoard[i - 2][col] &&
            currBoard[i - 2][col] === currBoard[i - 3][col]
        ) {
            return true;
        }
    }
    return false;
};

const checkHorizWin = (row, col, currBoard) => {
    var furthestRightIndex = col + 3;
    var furthestLeftIndex = col - 3;
    if (furthestRightIndex > 6) {
        furthestRightIndex = 6;
    }
    if (furthestLeftIndex < 0) {
        furthestLeftIndex = 0;
    }
    for (var i = furthestRightIndex; i >= furthestLeftIndex + 3; i--) {
        if (
            currBoard[row][i] === currBoard[row][i - 1] &&
            currBoard[row][i - 1] === currBoard[row][i - 2] &&
            currBoard[row][i - 2] === currBoard[row][i - 3]
        ) {
            return true;
        }
    }
    return false;
};

const checkDiagWin = (row, col, currBoard) => {
    // for bottom right to top left
    var checkRow = row;
    var checkCol = col;
    var count = 0;
    // Get bottom-right-most cell to check
    while (checkRow < 5 && checkCol < 6 && count < 3) {
        checkRow++;
        checkCol++;
        count++;
    }

    // Check bottom right to top left
    while (checkRow >= 3 && checkCol >= 3) {
        if (
            currBoard[checkRow][checkCol] !== 0 &&
            currBoard[checkRow][checkCol] ===
                currBoard[checkRow - 1][checkCol - 1] &&
            currBoard[checkRow - 1][checkCol - 1] ===
                currBoard[checkRow - 2][checkCol - 2] &&
            currBoard[checkRow - 2][checkCol - 2] ===
                currBoard[checkRow - 3][checkCol - 3]
        ) {
            return true;
        }
        checkRow--;
        checkCol--;
    }

    // for bottom left to top right
    checkRow = row;
    checkCol = col;
    count = 0;
    // Get bottom-left-most cell to check
    while (checkRow < 5 && checkCol > 0 && count < 3) {
        checkRow++;
        checkCol--;
        count++;
    }

    // Check bottom left to top right
    while (checkRow >= 3 && checkCol <= 3) {
        if (
            currBoard[checkRow][checkCol] !== 0 &&
            currBoard[checkRow][checkCol] ===
                currBoard[checkRow - 1][checkCol + 1] &&
            currBoard[checkRow - 1][checkCol + 1] ===
                currBoard[checkRow - 2][checkCol + 2] &&
            currBoard[checkRow - 2][checkCol + 2] ===
                currBoard[checkRow - 3][checkCol + 3]
        ) {
            return true;
        }
        checkRow--;
        checkCol--;
    }
    return false;
};

const checkBoardFull = (currBoard) => {
    var boardFull = true;
    for (var i = 0; i < 7; i++) {
        if (currBoard[0][i] === 0) {
            boardFull = false;
        }
    }
    return boardFull;
};

const checkGameOver = (row, col, currBoard) => {
    if (
        checkVertWin(row, col, currBoard) ||
        checkHorizWin(row, col, currBoard) ||
        checkDiagWin(row, col, currBoard)
    ) {
        return currBoard[row][col];
    } else {
        if (row === 0 && checkBoardFull(currBoard)) {
            return 3;
        } else {
            return 0;
        }
    }
};

const bestPlacement = (givenBoard, depth) => {
    var currBoard = [];
    for (let i = 0; i < 6; i++) {
        currBoard.push(givenBoard[i].slice());
    }
    const moves = possibleActions(currBoard);
    var moveValues = [];
    for (var i = 0; i < moves.length; i++) {
        var row = moves[i];
        var col = i;
        if (row === -1) {
            moveValues.push(-9999);
        } else {
            moveValues.push(getValue(row, col, currBoard, depth, 0, 2));
        }
    }
    var bestCol = -1;
    var bestVal = -99999;
    for (var j = 0; j < moveValues.length; j++) {
        if (moveValues[j] > bestVal) {
            bestCol = j;
            bestVal = moveValues[j];
        }
        if (moveValues[j] === bestVal) {
            // if at same value, randomly decide whether to swap it out
            var rand = Math.floor(Math.random() * (j + 1));
            if (rand === j - 1) {
                bestCol = j;
            }
        }
    }
    return bestCol;
};

const possibleActions = (currBoard) => {
    // get all possible row-col moves for given state
    var availableMoves = [];
    for (var i = 0; i < 7; i++) {
        var openRow = getEmptyRow(i, currBoard);
        availableMoves.push(openRow);
    }
    return availableMoves;
};

const getValue = (row, col, givenBoard, depth, currDepth, player) => {
    var currBoard = [];
    for (let i = 0; i < 6; i++) {
        currBoard.push(givenBoard[i].slice());
    }
    //check if someone wins this state
    currBoard[row][col] = player;
    var whoWon = checkGameOver(row, col, currBoard);
    if (whoWon === 2) {
        // computer wants to win
        return 10 - depth;
    } else if (whoWon === 3) {
        // tie is okay
        return 0;
    } else if (whoWon === 1) {
        // do not want player to win
        return -10 + depth;
    } else {
        // game still going
        if (currDepth >= depth) {
            // don't go beyond depth
            return 0;
        }
        const moves = possibleActions(currBoard);
        var moveValues = [];
        for (var i = 0; i < moves.length; i++) {
            var nextRow = moves[i];
            var nextCol = i;
            if (nextRow !== -1) {
                moveValues.push(
                    getValue(
                        nextRow,
                        nextCol,
                        currBoard,
                        depth,
                        currDepth + 1,
                        3 - player
                    )
                );
            }
        }
        var bestVal = 0;
        if (player === 2) {
            bestVal = Math.min(...moveValues);
        } else {
            bestVal = Math.max(...moveValues);
        }
        return bestVal;
    }
};
