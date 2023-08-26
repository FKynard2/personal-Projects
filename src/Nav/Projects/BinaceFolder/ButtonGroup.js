import { useState } from "react";

const BUTTON_LABEL = ["$2k", "$5k", "No limit"];
const ALT_STYLES = {
    border: "none",
    padding: "5px 15px",
    color: "#745E5E",
    background: "white",
};

export default function ButtonGroup({ updateValue }) {
    const [buttonSelection, setButtonSelection] = useState(2);

    return (
        <div className="button-group">
            {BUTTON_LABEL.map((btnText, idx) => (
                <button
                    key={idx}
                    onClick={() => {
                        setButtonSelection(idx);
                        updateValue(btnText);
                    }}
                    style={buttonSelection === idx ? ALT_STYLES : {}}
                >
                    {btnText}
                </button>
            ))}
        </div>
    );
}
