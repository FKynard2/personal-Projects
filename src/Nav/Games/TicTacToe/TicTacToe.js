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

                <Board />
            </Box>
        </>
    );
}

function Square(props) {
    return <div>X</div>;
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    renderSquares(i) {
        return (
            <>
                <ContainerRed>
                    <Square />
                </ContainerRed>
                
            </>
        );
    }

    render() {
        const element = (
            <div>
                <div>
                    {this.renderSquares(0)}
                    {this.renderSquares(1)}
                    {this.renderSquares(2)}
                </div>
                <div>
                    {this.renderSquares(3)}
                    {this.renderSquares(4)}
                    {this.renderSquares(5)}
                </div>
                <div>
                    {this.renderSquares(6)}
                    {this.renderSquares(7)}
                    {this.renderSquares(8)}
                </div>
            </div>
        );
        return element;
    }
}
