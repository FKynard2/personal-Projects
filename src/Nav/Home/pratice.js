// import React, { useEffect } from "react";

// const WORD_LIST_API_URL = "https://api.frontendexpert.io/api/fe/wordle-words";
// const NUM_GUESSES = 6

// export default function Wordle() {
//     //Create a useState for guesses
//     const [guesses, setGuesses] = useState(Array(NUM_GUESSES).fill(null));
//     //Create a useState for currentGuesses
//     //Create a useState for the solution
//     const [solution, setSolution] = useState('');
//     //useEffect to fetchData and give a random word from api
//       useEffect(() =>{
//         const fetchData = async () => {
//             const res = await fetch(WORD_LIST_API_URL);
//             const words = await res.json();
//             setGuesses(words[Math.floor(Math.random() * words.length)].toLowerCase());
//         }
//         fetchData();
//       }, [])
//     //Create a useEffect to handle events
//     useEffect(() => {
//         //Create a OnPressKey to handle the guesses
//         const onPressKey = () => {
//             if(guesses[NUM_GUESSES - 1] != null || guesses.includes(solution))
//             return;
//         }
//     }, [])
//     //Create event.key to hadle letters
//     //Create event.key to handle Backspace
//     //Create event.key to handle Enter
//     return (
//         // Create a GuessLine for the for className line using a map of guesses with aurguemnts of guess and idx
//         // And that will handle the props of guess solution and isFinal
//         <div className="board">
//             <div className="line">
//                 {/*Create a className var that can be changed depending on weather it isFinal
//                 map over guess.split("") with char and idx to fill the tile line
//           and add the className to tile for correct incorrect and close
//       */}
//                 <div className="tile correct"></div>
//                 <div className="tile close"></div>
//                 <div className="tile incorrect"></div>
//                 <div className="tile"></div>
//                 <div className="tile"></div>
//             </div>
//         </div>
//     );
// }

// //// More personlly  they are junkies and this will be what they need and know he doesn't know what to doYOu nkekkekekekeekkkeqkek
// //> they were like that is ok and this wedding will last forever but the marriage won't last and know it wil know that it will not work for you my boy
// function App() {
//     return (
//         <>
//             <MyButton onClick={handleClick}>Click Me</MyButton>

//             <MyButton onClick={loveButton}>Red</MyButton>
//         </>
//     );
// }

// function handleClick() {
//     document.body.style.backgroundColor = "red";
// }
// function loveButton() {
//     document.body.style.backgroundColor = "green";
// }

// function MyButton(props) {
//     return <button {...props} style={{ color: "red" }} />;
// }

import Box from "@mui/material/Box";
import { PrimaryContainer, Card } from "../../Styling/StyledComponents";
import Accordion from "../../features/Accordion";

export default function Practice() {
    const error = false;
    const props = {
        id: "input",
        type: "text",
        maxLength: "3",
    };
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: "lightgrey",
                }}
            >
                <PrimaryContainer>
                    <Card>
                        <h1 style={{ margin: "0", paddingBlock: "10px" }}>
                            {error ? "Error" : "Sucess"}
                        </h1>
                        {/* you can just use the ...props to pass all the props from anywhere
        you can also add more inline like the placeHolder
        */}
                        <label htmlFor="input">Input:</label>
                        <input {...props} placeholder="user" />

                        <Hello name="Frank" />
                        <Hello />
                        <Comment username="Frank" time={new Date().toString()}>
                            <p>
                                So you can pass in children to a componet but it
                                has do be done as a prop
                            </p>
                            <p>This is called componet compisition</p>
                        </Comment>
                    </Card>
                    <Card>
                        <h1 style={{ margin: "0", paddingBlock: "10px" }}>
                            {error ? "Error" : "Sucess"}
                        </h1>
                        {/* you can just use the ...props to pass all the props from anywhere
        you can also add more inline like the placeHolder
        */}
                        <label htmlFor="input">Input:</label>
                        <input {...props} placeholder="user" />
                        <Hello name="Karmen" />
                        <Hello />
                        <Comment username="Karmen" time={new Date().toString()}>
                            <p>
                                So you can pass in children to a componet but it
                                has do be done as a prop
                            </p>
                            <p>This is called componet compisition</p>
                        </Comment>
                    </Card>
                </PrimaryContainer>
                <Accordion />
            </Box>
        </>
    );
}

//You can use default for props with just passing a name="" and the will become the default
function Hello({ name = "User" }) {
    return <h1>Hello {name}</h1>;
}

//You can also do this as well but you don't see this much often
// Hello.defaultProps = {
//     name: "User"
// };

function Comment({ username, time, children }) {
    return (
        <section>
            <p>
                {username} commented at {time}
            </p>
            {/* you can use the children to add to the comment componet as a prop */}
            {children}
        </section>
    );
}
