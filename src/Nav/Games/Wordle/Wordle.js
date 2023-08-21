import Box from "@mui/material/Box";
import React from "react";
import { useState, useReducer } from "react";
import { useEffect } from "react";
import GAMENAV from "../GamesNav";

export default function Wordle() {
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
                <div>Wordle</div>
                <WordleGame/>
            </Box>
        </>
    );
}

const WORD_LIST_API_URL = "https://api.frontendexpert.io/api/fe/wordle-words";
const NUM_GUESSES = 6;
 function WordleGame() {
    //Create a useState for guesses
   const [guesses, setGuesses] = useState(Array(NUM_GUESSES).fill(null));
    //Create a useState for currentGuesses
    //Create a useState for the solution

    //Create useEffect to fetchData and get a random word from api
//      useEffect(() => {
//        const fetchData = async () => {
//          const res = await fetch(WORD_LIST_API_URL);
//          const words = await res.json();
//          setGuesses(words[Math.floor(Math.random() * words.length)].toLowerCase());
//        }
//        fetchData();
//      }, [])
 
//     //Create a useEffect to handle events
//   useEffect(() =>{
//     //Create onPressKey to handle event
//     const onPressKey = event => {
//       if(guesses[NUM_GUESSES - 1] != null || guesses.includes(solution)){
//         return;
//       }
//     }
//     const charCode = event.key.toLowerCase().charCodeAt(0);
//     const isLetter = event.key.length === 1 && 
//       charCode >= "a".charCodeAt(0) && 
//       charCode <= "z".charCodeAt(0);
//   }, [])
    //Create event.key to hadle letters
    //Create event.key to handle Backspace
    //Create event.key to handle Enter
    return (
        // Create a GuessLine for the for className line using a map of guesses with aurguemnts of guess and idx
        // And that will handle the props of guess solution and isFinal
        <div className="board">
         
            <div className="line">
                {/*Create a className var that can be changed depending on weather it isFinal
                map over guess.split("") with char and idx to fill the tile line
          and add the className to tile for correct incorrect and close
      */}
                <div className="tile correct">hello</div>
                <div className="tile close"></div>
                <div className="tile incorrect"></div>
                <div className="tile"></div>
                <div className="tile"></div>
            </div>
        </div>
    );
}