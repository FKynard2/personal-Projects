import React, { useState } from "react";
import TOOLS from "./Tools";
import {
    GeneratedBtnContainer,
    GeneratedBtn,
    ButtonContainer,
} from "../Styling/StyledComponents";

export function RandomButton() {
    const [numbers, setNumbers] = useState(TOOLS);
    const [remainingNumber, setRemainingNumber] = useState(null);
    const [allNumbersChosen, setAllNumbersChosen] = useState(false);
    const [NoNumbersChosen, setNoNumbersChosen] = useState(true);

    function randomGeneratedNumber() {
        if (numbers.length > 0) {
            const index = Math.floor(Math.random() * numbers.length);
            const updatedNumbers = [...numbers]; // create a copy of the array
            const randomNumber = updatedNumbers.splice(index, 1)[0]; // remove the element at the generated index
            setNumbers(updatedNumbers); // update the state of the array
            setRemainingNumber(randomNumber); // set the remaining element in the array
            setNoNumbersChosen(false); // set the "all numbers chosen" message
        } else {
            setRemainingNumber(null); // reset the remaining number if the array is empty
            setAllNumbersChosen(true); // set the "all numbers chosen" message
        }
    }
    function Reset() {
        setNumbers(TOOLS);
        setNoNumbersChosen(true);
        setRemainingNumber(null);
        setAllNumbersChosen(false);
    }
    return (
        <GeneratedBtnContainer>
            {allNumbersChosen && <p>You have completed all tools.</p>}
            {NoNumbersChosen && <p>Please choose random a Tool.</p>}
            {remainingNumber && <p>{remainingNumber}</p>}
            <ButtonContainer>
                <GeneratedBtn onClick={randomGeneratedNumber}>
                    Tools
                </GeneratedBtn>
                <GeneratedBtn onClick={Reset}>Reset</GeneratedBtn>
            </ButtonContainer>
        </GeneratedBtnContainer>
    );
}
