import Box from "@mui/material/Box";

import GAMENAV from "../GamesNav";
import React from "react";
import "./tictactoe.css";
import { ContainerRed } from "../../../Styling/StyledComponents";

export default function TicTacToe() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "darkgrey",
                }}
            >
                <GAMENAV />
                <div>TicTacToe</div>
                <Game />
            </Box>
        </>
    );
}

function Square(props) {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            YourTurn: true,
            levelClick: 0,
        };
    }
    gameOver(squares) {
        const winningRows = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < winningRows.length; i++) {
            const [a, b, c] = winningRows[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            )
                return true;
        }
        return false;
    }

    getAvailableSpots(squares) {
        let result = [];
        for (let i = 0; i < squares.length; i++) {
            if (!squares[i]) result.push(i);
        }
        return result;
    }

    minimize(board) {
        const moves = this.getAvailableSpots(board);
        //Base Cases
        if (this.gameOver(board)) return 1;
        if (!moves.length) return 0;

        let bestMove;
        let bestValue = Infinity;
        for (let i = 0; i < moves.length; i++) {
            board[moves[i]] = "O";
            let hValue = this.maximize(board);
            if (Array.isArray(hValue)) {
                hValue = hValue[0];
            }
            if (hValue < bestValue) {
                bestMove = moves[i];
                bestValue = hValue;
            }
            board[moves[i]] = null;
        }

        return [bestValue, bestMove];
    }

    maximize(board) {
        const moves = this.getAvailableSpots(board);
        //Base Cases
        if (this.gameOver(board)) return -1;
        if (!moves.length) return 0;

        let bestMove;
        let bestValue = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            board[moves[i]] = "X";
            let hValue = this.minimize(board);
            if (Array.isArray(hValue)) {
                hValue = hValue[0];
            }
            if (hValue > bestValue) {
                bestMove = moves[i];
                bestValue = hValue;
            }
            board[moves[i]] = null;
        }

        return [bestValue, bestMove];
    }

    handleClick(i) {
        let squares = [...this.state.squares];
        if (squares[i] || this.gameOver(squares)) return;
        const currentPlayer = this.state.YourTurn ? "X" : "O";
        squares[i] = currentPlayer;
        const best = this.minimize(squares);
        this.setState({ squares, YourTurn: !this.state.YourTurn });

        // setTimeout(() => {
        //     squares[best[1]] = "O";
        //     this.setState({ squares });
        // }, 1000);
    }
    levelClick(i) {
        console.log("yes");
    }
    playerSelect(i) {
        return (
            <>
                <button onClick={() => this.levelClick(i)}>1 Player</button>
                <button onClick={() => this.levelClick(i)}>2 Player</button>
            </>
        );
    }
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    isTie() {
        for (let square of this.state.squares) {
            if (square === null) return false;
        }
        return true;
    }
    render() {
        const element = (
            <div>
                {this.gameOver(this.state.squares) && (
                    <div>
                        <h1>Game Over!</h1>
                        <button
                            onClick={() =>
                                this.setState({
                                    squares: new Array(9).fill(null),
                                })
                            }
                        >
                            Click to Restart
                        </button>
                    </div>
                )}
                {this.isTie() && (
                    <div>
                        <h1>Tie!</h1>
                        <button
                            onClick={() =>
                                this.setState({
                                    squares: new Array(9).fill(null),
                                })
                            }
                        >
                            Click to Restart
                        </button>
                    </div>
                )}
                {this.playerSelect(0)}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
        return element;
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
}
