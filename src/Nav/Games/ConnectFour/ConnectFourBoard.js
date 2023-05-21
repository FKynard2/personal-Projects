import Box from "@mui/material/Box";
import { useState, useReducer } from "react";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import "./connectFour.css";

const NUM_ROW = 5;
const NUM_COL = 7;
const WINNER = 4;

export default function ConnectFour({
    player1,
    player2,
    player1Border,
    player2Border,
    boardBorder,
}) {
    const [{ board, winner, isGameOver, currentPlayer }, dispatchBoard] =
        useReducer(reducer, genEmptyState());

    return (
        <>
            {currentPlayer === 1 && isGameOver === false && (
                <h1 style={{ color: `${player1}`, textAlign: "center" }}>
                    Player 1's Turn
                </h1>
            )}
            {currentPlayer === 2 && isGameOver === false && (
                <h1 style={{ color: `${player2}`, textAlign: "center" }}>
                    Player 2's Turn
                </h1>
            )}
            {winner === 1 && (
                <h1 style={{ color: `${player1}`, textAlign: "center" }}>
                    Player {winner} Wins
                </h1>
            )}
            {winner === 2 && (
                <h1 style={{ color: `${player2}`, textAlign: "center" }}>
                    Player {winner} Wins
                </h1>
            )}
            {isGameOver === true && winner == null && (
                <h1 style={{ color: `${boardBorder}`, textAlign: "center" }}>
                    Game Over!
                </h1>
            )}
            <div className="board">
                {board.map((colEntries, colIdx) => {
                    const onClickCol = () => {
                        dispatchBoard({ type: "move", colIdx });
                    };
                    return (
                        <Column
                            player1={player1}
                            player2={player2}
                            player1Border={player1Border}
                            player2Border={player2Border}
                            key={colIdx}
                            entries={colEntries}
                            onClick={onClickCol}
                            boardBorder={boardBorder}
                        />
                    );
                })}
            </div>
            <Switch
                onChange={() => {
                    dispatchBoard({ type: "restart" });
                }}
                inputProps={{ "aria-label": "controlled" }}
            />

            <div style={{ color: "white" }}>Clear Board</div>
        </>
    );
}
function Column({
    entries,
    onClick,
    player1,
    player2,
    player1Border,
    player2Border,
    boardBorder,
}) {
    return (
        <div className="column" onClick={onClick}>
            {entries.map((entry, rowIdx) => {
                return (
                    <div
                        key={rowIdx}
                        style={{ border: `4px solid ${boardBorder}` }}
                        className="tile"
                    >
                        {entry == null && <div />}
                        {entry === 1 && (
                            <div
                                style={{
                                    backgroundColor: `${player1}`,
                                    border: `4px solid ${player1Border}`,
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%",
                                }}
                            />
                        )}
                        {entry === 2 && (
                            <div
                                style={{
                                    backgroundColor: `${player2}`,
                                    border: `4px solid ${player2Border}`,
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%",
                                }}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function reducer(state, action) {
    switch (action.type) {
        case "restart":
            return genEmptyState();
        case "move":
            const relevantCol = state.board[action.colIdx];
            const colIsFull = relevantCol[0] != null;
            if (state.isGameOver || colIsFull) return state;

            const { board, currentPlayer } = state;

            const boardClone = [...board];
            const colClone = [...relevantCol];

            const rowIdx = colClone.lastIndexOf(null);
            colClone[rowIdx] = currentPlayer;
            boardClone[action.colIdx] = colClone;

            const didWinVertical = didWin(
                rowIdx,
                action.colIdx,
                1,
                0,
                boardClone,
                currentPlayer
            );
            const didWinHorizontal = didWin(
                rowIdx,
                action.colIdx,
                0,
                1,
                boardClone,
                currentPlayer
            );
            const didWinDiagnol =
                didWin(
                    rowIdx,
                    action.colIdx,
                    1,
                    1,
                    boardClone,
                    currentPlayer
                ) ||
                didWin(rowIdx, action.colIdx, -1, 1, boardClone, currentPlayer);
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
