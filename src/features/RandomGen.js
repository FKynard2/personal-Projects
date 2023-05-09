import React, { useState } from "react";
import {
    SimSimSalabimContainer,
    GeneratedBtnContainer,
    GeneratedBtn,
    ButtonContainer,
} from "../Styling/StyledComponents";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

let initialFields = ["Buy a Car", "Buy a House", "Go on vacation"];

export function RandomButton() {
    const [field, setField] = useState(initialFields);
    const [remainingFields, setRemainingField] = useState(null);
    const [allFieldsChosen, setAllFieldsChosen] = useState(false);
    const [noFieldsChosen, setnoFieldsChosen] = useState(true);
    const [sim, setSim] = useState(false);
    const [Sim, setSimTwo] = useState(false);
    const [salbim, setSalabim] = useState(false);

    // function simSimSalabim() {
    //     if (field.length > 0) {
    //         setTimeout(() => {
    //             setnoFieldsChosen(false);
    //             setSim(true);
    //         }, 500);
    //         setTimeout(() => {
    //             setSimTwo(true);
    //         }, 1000);

    //         setTimeout(() => {
    //             setSalabim(true);
    //         }, 1500);
    //         setTimeout(() => {
    //             setSim(false);
    //             setSimTwo(false);
    //             setSalabim(false);
    //         }, 2200);
    //         setTimeout(() => {
    //             setAllFieldsChosen(false);
    //         }, 500);
    //     } else if (field.length <= 0) {
    //         setTimeout(() => {
    //             setAllFieldsChosen(true);
    //         }, 500);
    //     }
    // }

    function simSimSalabim() {
        const timeoutValues = [500, 1000, 1500, 2200, 500];
        const stateUpdateFunctions = [
            () => {
                setnoFieldsChosen(false);
                setSim(true);
            },
            () => setSimTwo(true),
            () => setSalabim(true),
            () => {
                setSim(false);
                setSimTwo(false);
                setSalabim(false);
            },
            () => setAllFieldsChosen(false),
        ];

        if (field.length > 0) {
            timeoutValues.forEach((value, index) => {
                setTimeout(() => {
                    stateUpdateFunctions[index]();
                }, value);
            });
        } else if (field.length <= 0) {
            setTimeout(() => {
                setAllFieldsChosen(true);
            }, timeoutValues[0]);
        }
    }

    function randomGeneratedField() {
        setTimeout(() => {
            if (field.length > 0) {
                const index = Math.floor(Math.random() * field.length);
                const newupdatedFields = [...field];
                const newRandomField = newupdatedFields.splice(index, 1)[0];
                setField(newupdatedFields);
                setRemainingField(newRandomField);
                setnoFieldsChosen(false);
            }
        }, 2200);
        setTimeout(() => {
            setRemainingField(null);
        }, 500);
    }

    function resetFields() {
        setField(initialFields);
        setnoFieldsChosen(true);
        setRemainingField(null);
        setAllFieldsChosen(false);
        setSim(false);
        setSimTwo(false);
        setSalabim(false);
    }

    function handleInputChange(e, index) {
        const { value } = e.target;
        const updatedFields = [...field];
        updatedFields[index] = value;
        setField(updatedFields);
    }

    function handleAddField() {
        const updatedFields = [...field, ""];
        setField(updatedFields);
    }

    function handleRemoveField() {
        const updatedFields = [...field];
        updatedFields.pop();
        setField(updatedFields);
    }

    function generateRandomField() {
        randomGeneratedField();
        simSimSalabim();
    }
    const inputFields = field.map((field, index) => (
        <TextField
            key={index}
            fullWidth
            label=""
            value={field}
            onChange={(e) => handleInputChange(e, index)}
            sx={{
                // set the border to a blue color
                borderRadius: "5px", // round the corners of the border
                "& .MuiInputBase-input": {
                    // target the input element of the TextField
                    color: "white",
                    border: " 2px solid white",
                    borderRadius: "5px", // set the color of the text to red
                    // set the font weight of the text to bold
                },
            }}
        />
    ));

    return (
        <GeneratedBtnContainer>
            <Stack sx={{ width: "100%" }} spacing={2} direction="column">
                {inputFields}
                <Stack
                    sx={{ justifyContent: "space-between" }}
                    spacing={2}
                    direction="row"
                >
                    <Button
                        variant="contained"
                        disabled={field.length > 8}
                        className={field.length > 8 ? "disabled-button" : ""}
                        sx={{
                            backgroundColor:
                                field.length > 8 ? "grey" : "#907d29",
                            color: "white",
                            cursor:
                                field.length > 8 ? "not-allowed" : "pointer",
                            "&:hover": {
                                backgroundColor:
                                    field.length > 8 ? "grey" : "#6b5709",
                                color: "white",
                            },
                            "&:focus": {
                                backgroundColor:
                                    field.length > 8 ? "grey" : "#6b5709",
                                color: "white",
                            },
                            "&.disabled-button": {
                                backgroundColor: "grey",
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "lightgrey",
                                    color: "white",
                                },
                                "&:focus": {
                                    backgroundColor: "#907d29",
                                    color: "white",
                                },
                            },
                        }}
                        onClick={handleAddField}
                    >
                        <AddIcon />
                    </Button>
                    <Button
                        variant="contained"
                        disabled={field.length < 3}
                        className={field.length < 3 ? "disabled-button" : ""}
                        sx={{
                            backgroundColor:
                                field.length < 3 ? "grey" : "#907d29",
                            color: "white",
                            cursor:
                                field.length < 3 ? "not-allowed" : "pointer",
                            "&:hover": {
                                backgroundColor:
                                    field.length < 3 ? "grey" : "#6b5709",
                                color: "white",
                            },
                            "&:focus": {
                                backgroundColor:
                                    field.length < 3 ? "grey" : "#6b5709",
                                color: "white",
                            },
                            "&.disabled-button": {
                                backgroundColor: "grey",
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "lightgrey",
                                    color: "white",
                                },
                                "&:focus": {
                                    backgroundColor: "#907d29",
                                    color: "white",
                                },
                            },
                        }}
                        onClick={handleRemoveField}
                    >
                        <RemoveIcon />
                    </Button>
                </Stack>
            </Stack>

            {noFieldsChosen && <p>What's your next move.</p>}
            {allFieldsChosen && <p>No more fortune left.</p>}
            <SimSimSalabimContainer>
                {sim && <p>Sim</p>}
                {Sim && <p>Sim</p>}
                {salbim && <p>Salabim</p>}
            </SimSimSalabimContainer>

            {remainingFields && <p>{remainingFields}</p>}
            <ButtonContainer>
                <GeneratedBtn onClick={generateRandomField}>
                    Ask Hodgie
                </GeneratedBtn>
                <GeneratedBtn onClick={resetFields}>Reset</GeneratedBtn>
            </ButtonContainer>
        </GeneratedBtnContainer>
    );
}
