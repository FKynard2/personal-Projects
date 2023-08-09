import { useState, useReducer } from "react";
import { useEffect } from "react";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import { getEmptyRow } from "./CFourAI";
import {
    getEmptyRow,
    checkBoardFull,
    checkGameOver,
    bestPlacement
} from "./CFourAI";

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

    const [level, setLevel] = useState(0); // 0 for easy, 1 for medium, 2 for hard
    const [board, setBoard] = useState(emptyBoard); // 0 for empty cell, 1 for you(black), 2 for opponent(red)
    const [yourTurn, setYourTurn] = useState(true); // true if your turn, false if opponent's
    const [winner, setWinner] = useState(0); // 0 no one/game still going, 1 you, 2 opponent, 3 tie
    const boardFull = checkBoardFull(board);
   

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
            {boardFull === true && winner == 3 && (
                <Typography
                    variant="h3"
                    style={{
                        color: `${boardBorder}`,
                        textAlign: "center",
                        padding: "1rem",
                    }}
                >
                    Tie!
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
