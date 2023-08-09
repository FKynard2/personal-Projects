import Button from "@mui/material/Button";
import GAMENAV from "../GamesNav";
import { useState, useReducer } from "react";
import ConnectFour from "./ConnectFourBoard";
import TOKEN_OPTION_COLORS from "./TokenOptionColors";
import BOARD_OPTION_COLORS from "./BoardOptionColors";
import {
    ColorChangeBtn1,
    ColorChangeBtn2,
    ColorChangeBox,
    ConnectFourBoardBackground,
    Token,
    PlayerTypography,
    PlayerHero,
    MainContent,
    PlayerTokenBox,
} from "../../../Styling/StyledComponents";

export default function ConnectFourColorChanger() {
    const [playerOnePieceColor, setPlayerOnePieceColor] = useState("red");
    const [playerOneBorderColor, setPlayerOneBorderColor] = useState("red");
    const [playerTwoPieceColor, setPlayerTwoPieceColor] = useState("black");
    const [playerTwoBorderColor, setPlayerTwoBorderColor] = useState("black");
    const [boardBackground, setBoardBackground] = useState("#7700e0");
    const [boardBorder, setBoardBorder] = useState("#1807268c");

    return (
        <>
            <GAMENAV />
            <PlayerHero>
                <PlayerTokenBox
                    sx={{
                        border: `2px solid ${playerOneBorderColor}`,
                    }}
                >
                    <PlayerTypography
                        sx={{
                            color: `${playerOnePieceColor}`,
                        }}
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
                </PlayerTokenBox>
                <PlayerTokenBox
                    sx={{
                        border: `2px solid ${playerTwoBorderColor}`,
                    }}
                >
                    <PlayerTypography sx={{ color: `${playerTwoPieceColor}` }}>
                        {"Player 2 "}
                    </PlayerTypography>
                    <Token
                        sx={{
                            backgroundColor: `${playerTwoPieceColor}`,
                            color: `${playerTwoPieceColor}`,
                            border: `4px solid ${playerTwoBorderColor}`,
                        }}
                    />
                </PlayerTokenBox>
            </PlayerHero>

            <MainContent>
                <ColorChangeBox>
                    <ColorChangeBtn1>
                        {TOKEN_OPTION_COLORS.map((color, idx) => {
                            return (
                                <Button
                                    className="disabled-button"
                                    disabled={
                                        playerTwoPieceColor === color.color ||
                                        idx === 0
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
                            );
                        })}
                    </ColorChangeBtn1>
                    <ColorChangeBtn1>
                        {TOKEN_OPTION_COLORS.map((color, idx) => {
                            return (
                                <Button
                                    className="disabled-button"
                                    disabled={
                                        playerTwoBorderColor === color.Border ||
                                        idx === 0
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
                                        setPlayerOneBorderColor(color.Border)
                                    }
                                >
                                    {color.BorderTitle}
                                </Button>
                            );
                        })}
                    </ColorChangeBtn1>
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
                        boardBackground={boardBackground}
                    />
                </ConnectFourBoardBackground>

                <ColorChangeBox>
                    <ColorChangeBtn2>
                        {TOKEN_OPTION_COLORS.map((color, idx) => {
                            return (
                                <Button
                                    className="disabled-button"
                                    disabled={
                                        playerOnePieceColor === color.color ||
                                        idx === 0
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
                            );
                        })}
                    </ColorChangeBtn2>
                    <ColorChangeBtn2>
                        {TOKEN_OPTION_COLORS.map((color, idx) => {
                            return (
                                <Button
                                    className="disabled-button"
                                    disabled={
                                        playerOneBorderColor === color.Border ||
                                        idx === 0
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
                                    key={idx}
                                    onClick={() =>
                                        setPlayerTwoBorderColor(color.Border)
                                    }
                                >
                                    {color.BorderTitle}
                                </Button>
                            );
                        })}
                    </ColorChangeBtn2>
                </ColorChangeBox>
            </MainContent>

            <ColorChangeBox sx={{ alignItems: "center" }}>
                <ColorChangeBtn2>
                    {BOARD_OPTION_COLORS.map((color, idx) => {
                        return (
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
                                onClick={() => setBoardBackground(color.color)}
                            >
                                {color.title}
                            </Button>
                        );
                    })}
                </ColorChangeBtn2>
                <ColorChangeBtn2>
                    {BOARD_OPTION_COLORS.map((color, idx) => {
                        return (
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
                                onClick={() => setBoardBorder(color.Border)}
                            >
                                {color.BorderTitle}
                            </Button>
                        );
                    })}
                </ColorChangeBtn2>
            </ColorChangeBox>
        </>
    );
}
