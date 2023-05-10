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

let initialFields = ["Buy a Car", "Buy a House", "Go on vacation", "Stay Home"];
let fortunes = [
    "YES",
    "NO",
    "Ask Tomorrow",
    "Not Likley",
    "It Looks Good From My View",
    "Please ask again",
];

export function RandomButton() {
    const [field, setField] = useState(initialFields);
    const [answers, setAnswers] = useState(fortunes);
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
            () => setOneFieldsChosen(false),
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
        }
    }

    function generateRandomField() {
        randomGeneratedField();
        simSimSalabim();
    }
    const inputFields = field.map((field, index) => (
        <TextField
            key={index}
            label=""
            value={field}
            onChange={(e) => handleInputChange(e, index)}
            sx={{
                borderRadius: "5px",
                "& .MuiInputBase-input": {
                    color: "white",
                    border: " 2px solid white",
                    borderRadius: "5px",
                    marginLeft: 0,
                },
            }}
        />
    ));

    return (
        <GeneratedBtnContainer>
            <Stack sx={{ width: "100%" }} spacing={2} direction="column">
                <Stack spacing={1} direction="row" sx={{flexWrap: "wrap", justifyContent: "space-between"}}>
                    {inputFields}
                </Stack>
                <Stack
                    sx={{ justifyContent: "space-between" }}
                    spacing={2}
                    direction="row"
                >
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
                </Stack>
            </Stack>

            {noFieldsChosen && <p>Hodgie makes tough decisions easy.</p>}
            {oneFieldsChosen && <p>Ask Hodgie for a direct answer.</p>}

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
