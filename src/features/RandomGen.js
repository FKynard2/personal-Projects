import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { EmptyQuestion } from "../Styling/StyledComponents";
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

let initialFields = ["Buy a Car", "Buy a House", "Go on vacation", "Stay Home"];
let fortunes = [
    "Affirmative!",
    "Negative, buddy.",
    "Hmmm, let's save that question for tomorrow, shall we?",
    "Not too promising, I'm afraid.",
    "From my expert perspective, it appears quite favorable.",
    "I kindly request you to ask once more, my friend.",
];

export function RandomButton() {
    const [field, setField] = useState(initialFields);
    const [answers, setAnswers] = useState(fortunes);
    const [textfield, setTextField] = useState(null);
    const [remainingFields, setRemainingField] = useState(null);
    const [noFieldsChosen, setnoFieldsChosen] = useState(true);
    const [oneFieldsChosen, setOneFieldsChosen] = useState(false);
    const [sim, setSim] = useState(false);
    const [Sim, setSimTwo] = useState(false);
    const [salbim, setSalabim] = useState(false);
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
            () => {
                setOneFieldsChosen(false);
            },
        ];

        if (field.length > 0) {
            timeoutValues.forEach((value, index) => {
                setTimeout(() => {
                    stateUpdateFunctions[index]();
                }, value);
            });
        }
    }

    function randomGeneratedField() {
        setTimeout(() => {
            if (field.length === 1) {
                const index = Math.floor(Math.random() * answers.length);
                const newupdatedFields = answers[index];
                setRemainingField(newupdatedFields);
                setOneFieldsChosen(false);
            } else if (field.length > 1) {
                const index = Math.floor(Math.random() * field.length);
                const newupdatedFields = [...field];
                const newRandomField = newupdatedFields.splice(index, 1)[0];
                setField(newupdatedFields);
                setRemainingField(newRandomField);
                setnoFieldsChosen(false);
                setOneFieldsChosen(false);
            }
        }, 2200);
        setTimeout(() => {
            setRemainingField(null);
        }, 500);
    }

    function resetFields() {
        setField(initialFields);
        setnoFieldsChosen(true);
        setOneFieldsChosen(false);
        setRemainingField(null);
        setSim(false);
        setSimTwo(false);
        setSalabim(false);
        setTextField(false);
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
        if (updatedFields.length > 1) {
            setOneFieldsChosen(false);
            setnoFieldsChosen(true);
            setRemainingField(false);
        }
    }

    function handleRemoveField() {
        const updatedFields = [...field];
        updatedFields.pop();
        setField(updatedFields);
        if (updatedFields.length === 1) {
            setOneFieldsChosen(true);
            setnoFieldsChosen(false);
            setRemainingField(false);
        }
    }
    function generateRandomField() {
        if (field.some((value) => value.trim() === "")) {
            setTextField(true);
            return;
        }

        randomGeneratedField();
        simSimSalabim();
    }

    const inputFields = field.map((fields, index) => {
        return (
            <TextField
                key={index}
                label=""
                value={fields}
                fullWidth={
                    field.length === 1 ||
                    field.length === 2 ||
                    field.length === 3 ||
                    (field.length === 5 && index === 4)
                }
                onChange={(e) => handleInputChange(e, index)}
                sx={{
                    borderRadius: "5px",
                    "& .MuiInputBase-input": {
                        color: "white",
                        border: "2px solid white",
                        borderRadius: "5px",
                        margin: "5px",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                            borderColor: "#907d29",
                            top: 0.5,
                            bottom: 5,
                            left: 5,
                            right: 5,
                        },
                    "@media (max-width: 600px)": {
                        width: "95%",
                        padding: 0,
                    },
                }}
            />
        );
    });

    return (
        <GeneratedBtnContainer>
            <Stack sx={{ width: "100%" }} spacing={2} direction="column">
                <Stack
                    direction="row"
                    sx={{
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        minHeight: 215,
                        "@media (max-width: 600px)": {
                            justifyContent: "center",
                        },
                    }}
                >
                    {inputFields}
                </Stack>
                <Stack
                    sx={{ justifyContent: "space-around" }}
                    spacing={2}
                    direction="row"
                >
                    <Button
                        variant="contained"
                        disabled={field.length < 2}
                        className={field.length < 2 ? "disabled-button" : ""}
                        sx={{
                            backgroundColor:
                                field.length < 2 ? "grey" : "#907d29",
                            color: "white",
                            cursor:
                                field.length < 2 ? "not-allowed" : "pointer",
                            "&:hover": {
                                backgroundColor:
                                    field.length < 2 ? "grey" : "#6b5709",
                                color: "white",
                            },
                            "&:focus": {
                                backgroundColor:
                                    field.length < 2 ? "grey" : "#6b5709",
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
                    <Button
                        variant="contained"
                        disabled={field.length > 5}
                        className={field.length > 5 ? "disabled-button" : ""}
                        sx={{
                            backgroundColor:
                                field.length > 5 ? "grey" : "#907d29",
                            color: "white",
                            cursor:
                                field.length > 5 ? "not-allowed" : "pointer",
                            "&:hover": {
                                backgroundColor:
                                    field.length > 5 ? "grey" : "#6b5709",
                                color: "white",
                            },
                            "&:focus": {
                                backgroundColor:
                                    field.length > 5 ? "grey" : "#6b5709",
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
                </Stack>
            </Stack>

            {noFieldsChosen && <p>Hodgie makes tough decisions easy.</p>}
            {textfield && (
                <EmptyQuestion variant="h6" gutterBottom>
                    Why is there an empty question? Well, you see, sometimes
                    questions can be empty when there isn't enough information
                    or context provided. It's like being stuck in a mysterious
                    fog without any clues to guide us. But fear not, for Hodgie
                    is always ready to unravel mysteries and find the answers!
                    So, let's embark on an adventure together and discover the
                    hidden truths behind this empty question. Please Reset to
                    Continue.
                </EmptyQuestion>
            
            )}
            {oneFieldsChosen && (
                <p style={{ color: "#907d29" }}>
                    Ask Hodgie for a direct answer.
                </p>
            )}

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
