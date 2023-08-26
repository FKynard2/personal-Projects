import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import InputText from "./InputText";
import BinaceApp from "./BinaceApp";

const LABEL_TEXT = [
    "Apply to work with our angency",
    "What's your budget?",
    "Anying else we should know?",
    "Thank you!",
];

export default function LeftContainer({ stage, setStage }) {
    const [email, setEmail] = useState("");
    const [details, setDetails] = useState("");
    const [selectButton, setSelectButton] = useState("");
    let content;
    let contentNew;
    if (stage === 1) {
        content = (
            <InputText placeholder="What's your email" updateValue={setEmail} />
        );
    } else if (stage === 2) {
        content = <ButtonGroup updateValue={setSelectButton} />;
    } else if (stage === 3) {
        content = <InputText updateValue={setDetails} />;
    } else if (stage === 4) {
        content = alert(JSON.stringify({ email, details, selectButton }));
        contentNew = (
            <div className="continue">
                <h2>Welcome To the binace Team!</h2>
                <button
                    style={{ backgroundColor: "white", color: "#745e5e", border: "0px", padding: "5px 15px" }}
                    onClick={() => setStage(stage + 1)}
                >
                    Continue
                </button>
            </div>
        );
    }
    return (
        <div className="full">
            {stage <= 4 ? (
                <div className="left-container">
                    <div className="inner-left-container">
                        <h1>{LABEL_TEXT[stage]}</h1>
                        {contentNew}
                        {content}
                        {stage < 4 && (
                            <button onClick={() => setStage(stage + 1)}>
                                Next
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <BinaceApp />
            )}
        </div>
    );
}
