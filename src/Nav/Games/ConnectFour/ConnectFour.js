import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GAMENAV from "../GamesNav";
import { useState, useReducer } from "react";
import Typography from "@mui/material/Typography";
import "./connectFour.css";
import ConnectFour from "./ConnectFourBoard";
import {
    ColorChangeBtn1,
    ColorChangeBtn2,
    ColorChangeBox,
    ConnectFourBoardBackground,
    Token,
    PlayerTypography,
    PlayerHero,
    MainContent,
} from "../../../Styling/StyledComponents";

const OPTION_COLORS = [
    //The 1st one is for the title of the buttons
    {
        title: "Token's",
        color: "#ffffff00",
        Border: "#ffffff00",
        BorderTitle: "Border's",
    },
    {
        title: "Black",
        color: "black",
        Border: "black",
        BorderTitle: "Black",
    },
    {
        title: "Red",
        color: "red",
        Border: "red",
        BorderTitle: "Red",
    },
    {
        title: "Blue",
        color: "blue",
        Border: "blue",
        BorderTitle: "Blue",
    },
    {
        title: "Peach",
        color: "#cb9c19",
        Border: "#a022ef",
        BorderTitle: "Violet",
    },
    {
        title: "Teal",
        color: "#37e9b0",
        Border: "#fd00af",
        BorderTitle: "Fusia",
    },
];
const BOARD_OPTION_COLORS = [
    //The 1st one is for the title of the buttons
    {
        title: "Board",
        color: "#ffffff00",
        Border: "#ffffff00",
        BorderTitle: "Border",
    },
    {
        title: "Purple",
        color: "#7700e0",
        Border: "#522d70",
        BorderTitle: "Purple",
    },
    {
        title: "Green",
        color: "green",
        Border: "#30c943",
        BorderTitle: "Green",
    },
    {
        title: "LtBlue",
        color: "#5b99d9",
        Border: "#1a3958",
        BorderTitle: "LtBlue",
    },
    {
        title: "Yellow",
        color: "yellow",
        Border: "#889523",
        BorderTitle: "Yellow",
    },
    {
        title: "Orange",
        color: "#ff7600",
        Border: "#743c0b",
        BorderTitle: "Orange",
    },
];

export default function ConnectFourColorChanger() {
    const [playerOnePieceColor, setPlayerOnePieceColor] = useState("red");
    const [playerTwoPieceColor, setPlayerTwoPieceColor] = useState("black");
    const [playerOneBorderColor, setPlayerOneBorderColor] = useState("red");
    const [playerTwoBorderColor, setPlayerTwoBorderColor] = useState("black");
    const [boardBackground, setBoardBackground] = useState("#7700e0");
    const [boardBorder, setBoardBorder] = useState("#1807268c");

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "darkgray",
                }}
            >
                <GAMENAV />
                <PlayerHero>
                    <Box>
                        <PlayerTypography
                            sx={{ color: `${playerOnePieceColor}` }}
                        >
                            {"Player 1 "}
                        </PlayerTypography>
                        <Token
                            sx={{
                                backgroundColor: `${playerOnePieceColor}`,
                                color: `${playerOnePieceColor}`,
                                border: `4px solid ${playerOneBorderColor}`,
                            }}
                        />
                    </Box>
                    <Box>
                        <PlayerTypography
                            sx={{ color: `${playerTwoPieceColor}` }}
                        >
                            {"Player 2 "}
                        </PlayerTypography>
                        <Token
                            sx={{
                                backgroundColor: `${playerTwoPieceColor}`,
                                color: `${playerTwoPieceColor}`,
                                border: `4px solid ${playerTwoBorderColor}`,
                            }}
                        />
                    </Box>
                </PlayerHero>

                <MainContent>
                    <ColorChangeBox>
                        {OPTION_COLORS.map((color, idx) => {
                            return (
                                <ColorChangeBtn1 key={idx}>
                                    <Button
                                        className="disabled-button"
                                        disabled={
                                            playerTwoPieceColor ===
                                                color.color || idx === 0
                                        }
                                        sx={{
                                            color: "white",
                                            backgroundColor: `${color.color}`,
                                            margin: "10px",
                                            "&:hover": {
                                                backgroundColor: `${color.color}`,
                                                opacity: 0.5,
                                            },
                                            "&.disabled-button": {
                                                color: "white",
                                            },
                                        }}
                                        key={idx}
                                        onClick={() =>
                                            setPlayerOnePieceColor(color.color)
                                        }
                                    >
                                        {color.title}
                                    </Button>
                                    <Button
                                        className="disabled-button"
                                        disabled={
                                            playerTwoBorderColor ===
                                                color.Border || idx === 0
                                        }
                                        sx={{
                                            color: "white",
                                            backgroundColor: `${color.Border}`,
                                            margin: "10px",
                                            "&:hover": {
                                                backgroundColor: `${color.Border}`,
                                                opacity: 0.5,
                                            },
                                            "&.disabled-button": {
                                                color: "white",
                                            },
                                        }}
                                        key={idx + 6}
                                        onClick={() =>
                                            setPlayerOneBorderColor(
                                                color.Border
                                            )
                                        }
                                    >
                                        {color.BorderTitle}
                                    </Button>
                                </ColorChangeBtn1>
                            );
                        })}
                    </ColorChangeBox>

                    <ConnectFourBoardBackground
                        sx={{
                            backgroundColor: `${boardBackground}`,
                            border: `5px solid ${boardBorder}`,
                        }}
                    >
                        <ConnectFour
                            player1={playerOnePieceColor}
                            player1Border={playerOneBorderColor}
                            player2={playerTwoPieceColor}
                            player2Border={playerTwoBorderColor}
                            boardBorder={boardBorder}
                        />
                    </ConnectFourBoardBackground>

                    <ColorChangeBox>
                        {OPTION_COLORS.map((color, idx) => {
                            return (
                                <ColorChangeBtn2 key={idx}>
                                    <Button
                                        className="disabled-button"
                                        disabled={
                                            playerOnePieceColor ===
                                                color.color || idx === 0
                                        }
                                        sx={{
                                            color: "white",
                                            backgroundColor: `${color.color}`,
                                            margin: "10px",
                                            "&:hover": {
                                                backgroundColor: `${color.color}`,
                                                opacity: 0.5,
                                            },
                                            "&.disabled-button": {
                                                color: "white",
                                            },
                                        }}
                                        key={idx}
                                        onClick={() =>
                                            setPlayerTwoPieceColor(color.color)
                                        }
                                    >
                                        {color.title}
                                    </Button>
                                    <Button
                                        className="disabled-button"
                                        disabled={
                                            playerOneBorderColor ===
                                                color.Border || idx === 0
                                        }
                                        sx={{
                                            color: "white",
                                            backgroundColor: `${color.Border}`,
                                            margin: "10px",
                                            "&:hover": {
                                                backgroundColor: `${color.Border}`,
                                                opacity: 0.5,
                                            },
                                            "&.disabled-button": {
                                                color: "white",
                                            },
                                        }}
                                        key={idx + 6}
                                        onClick={() =>
                                            setPlayerTwoBorderColor(
                                                color.Border
                                            )
                                        }
                                    >
                                        {color.BorderTitle}
                                    </Button>
                                </ColorChangeBtn2>
                            );
                        })}
                    </ColorChangeBox>
                </MainContent>

                <ColorChangeBox sx={{ width: "80%", margin: "auto" }}>
                    {BOARD_OPTION_COLORS.map((color, idx) => {
                        return (
                            <ColorChangeBtn2 key={idx}>
                                <Button
                                    className="disabled-button"
                                    disabled={idx === 0}
                                    sx={{
                                        color: "white",
                                        backgroundColor: `${color.color}`,
                                        margin: "10px",
                                        "&:hover": {
                                            backgroundColor: `${color.color}`,
                                            opacity: 0.5,
                                        },
                                        "&.disabled-button": {
                                            color: "white",
                                        },
                                    }}
                                    key={idx}
                                    onClick={() =>
                                        setBoardBackground(color.color)
                                    }
                                >
                                    {color.title}
                                </Button>
                                <Button
                                    className="disabled-button"
                                    disabled={idx === 0}
                                    sx={{
                                        color: "white",
                                        backgroundColor: `${color.color}`,
                                        margin: "10px",
                                        "&:hover": {
                                            backgroundColor: `${color.color}`,
                                            opacity: 0.5,
                                        },
                                        "&.disabled-button": {
                                            color: "white",
                                        },
                                    }}
                                    key={idx + 6}
                                    onClick={() => setBoardBorder(color.Border)}
                                >
                                    {color.BorderTitle}
                                </Button>
                            </ColorChangeBtn2>
                        );
                    })}
                </ColorChangeBox>
            </Box>
        </>
    );
}
