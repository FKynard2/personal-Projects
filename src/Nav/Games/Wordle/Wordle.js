import Box from "@mui/material/Box";
import React from "react";
import { useState, useReducer } from "react";
import { useEffect } from "react";
import GAMENAV from "../GamesNav";
import "./wordle.css";

export default function Wordle() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "black",
                }}
            >
                <GAMENAV />
                <div>Wordle</div>
                <WordleGame />
            </Box>
        </>
    );
}

const WORD_LIST_API_URL = "https://api.frontendexpert.io/api/fe/wordle-words";
const NUM_GUESSES = 6;
const WORD_LENGTH = 5;

function WordleGame() {
    const [guesses, setGuesses] = useState(Array(NUM_GUESSES).fill(null));
    const [currentGuess, setCurrentGuess] = useState("");
    const [solution, setSolution] = useState(null);
    const [isGameOver, SetIsGameOver] = useState(false);
  

    const hardcodedWords = [
        "apple",
        "beach",
        "cloud",
        "dance",
        "eagle",
        "flute",
        "grape",
        "horse",
        "juice",
        "koala",
        "latch",
        "music",
        "nymph",
        "olive",
        "peach",
        "quilt",
        "rhino",
        "sheep",
        "tiger",
        "umbra",
        "vixen",
        "whale",
        "xenon",
        "yacht",
        "zebra",
        "blimp",
        "crisp",
        "diver",
        "eager",
        "fable",
        "gnome",
        "honey",
        "ivory",
        "jolly",
        "knead",
        "latch",
        "maple",
        "noble",
        "ocean",
        "peach",
        "quirk",
        "rover",
        "snack",
        "trace",
        "umpre",
        "vixen",
        "wagon",
        "xerox",
        "yacht",
        "zebra",
    ];
    useEffect(() => {
        setSolution(
            hardcodedWords[
                Math.floor(Math.random() * hardcodedWords.length)
            ].toLowerCase()
        );
    }, []);

    useEffect(() => {
        if (solution == null) return;

        const onKeyPress = (event) => {
            if (
                guesses[NUM_GUESSES - 1] != null ||
                guesses.includes(solution)
            ) {
                return;
            }

            const charCode = event.key.toLowerCase().charCodeAt(0);
            const isLetter =
                event.key.length === 1 &&
                charCode >= "a".charCodeAt(0) &&
                charCode <= "z".charCodeAt(0);

            setCurrentGuess((prevGuess) => {
                if (event.key === "Backspace") {
                    return prevGuess.slice(0, -1);
                } else if (
                    event.key === "Enter" &&
                    prevGuess.length === WORD_LENGTH
                ) {
                    const currentGuessIndex = guesses.findIndex(
                        (guess) => guess == null
                    );
                    const guessesClone = [...guesses];
                    guessesClone[currentGuessIndex] = prevGuess;
                    setGuesses(guessesClone);
                    return "";
                } else if (prevGuess.length < WORD_LENGTH && isLetter) {
                    return prevGuess + event.key.toLowerCase();
                }
                return prevGuess;
            });
        };
        window.addEventListener("keydown", onKeyPress);
        return () => window.removeEventListener("keydown", onKeyPress);
    }, [guesses, solution]);

    const currentGuessIndex = guesses.findIndex((guess) => guess == null);

    useEffect(() => {
        if (
            guesses[currentGuessIndex - 1] === solution ||
            currentGuessIndex === -1
        ) {
            SetIsGameOver(true);
        }
    }, [guesses, currentGuessIndex, solution]);
   
    if (solution == null) return null;

    function handleResetClick() {
        setGuesses(Array(NUM_GUESSES).fill(null));
        setCurrentGuess("");
        setSolution(
            hardcodedWords[
                Math.floor(Math.random() * hardcodedWords.length)
            ].toLowerCase()
        );
        SetIsGameOver(false);
    }
    return (
        <div className="board">
            {isGameOver === true && (
                <div style={{ color: "red" }}>GameOver</div>
            )}
            {guesses.map((guess, i) => {
                return (
                    <GuessLine
                        key={i}
                        guess={(i === currentGuessIndex
                            ? currentGuess
                            : guess ?? ""
                        ).padEnd(WORD_LENGTH)}
                        solution={solution}
                        isFinal={
                            currentGuessIndex > i || currentGuessIndex === -1
                        }
                    />
                );
            })}
            <button onClick={() => handleResetClick()}>Reset</button>
        </div>
    );
}

function GuessLine({ guess, solution, isFinal }) {
    return (
        <div className="line">
            {guess.split("").map((char, i) => {
                let className = "tile";
                if (isFinal) {
                    if (char === solution[i]) {
                        className += " correct";
                    } else if (solution.includes(char)) {
                        className += " close";
                    } else {
                        className += " incorrect";
                    }
                }
                return (
                    <div key={i} className={className}>
                        {char}
                    </div>
                );
            })}
        </div>
    );
}
