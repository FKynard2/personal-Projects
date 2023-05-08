import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import panels from "./AccPanels";



function Accordion() {
    const [activePanel, setActivePanel] = useState(panels[0].id);
    
    function toggleAccordion(panelId) {
        setActivePanel(activePanel === panelId ? null : panelId);
    }
    

    return (
        <div className="wrapper">
            <div
                className="accordion"
                onClick={(e) => {
                    const panelId = Number(
                        e.target
                            .closest(".accordion-panel")
                            ?.getAttribute("data-panel-id")
                    );
                    toggleAccordion(panelId);
                }}
            >
                {panels.map((Panels, index) => {
                    return (
                        <div
                            className={`accordion-panel${
                                activePanel === index ? " is-active" : ""
                            }`}
                            key={index}
                            data-panel-id={index}
                        >
                            <h2 id={`panel${index + 1}-heading`}>
                                <button
                                    className="accordion-trigger"
                                    aria-controls={`panel${index + 1}-content`}
                                    aria-expanded={
                                        activePanel === index ? "true" : false
                                    }
                                >
                                    <span
                                        className="accordion-title"
                                        id={`panel${index + 1}-title`}
                                    >
                                        <Link
                                            to={Panels.path}
                                            style={{
                                                color: "white",
                                                textDecoration: "none",
                                                fontSize: "1.5rem !important",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {Panels.title}
                                        </Link>
                                    </span>
                                    <svg
                                        aria-hidden="true"
                                        className="accordion-icon"
                                    >
                                        {Panels.icon}
                                    </svg>
                                </button>
                            </h2>

                            <div
                                className="accordion-content"
                                id={`panel${index + 1}-content`}
                                aria-labelledby={`panel${index + 1}-heading`}
                                aria-hidden={activePanel !== index}
                                role="region"
                            >
                                {activePanel === index
                                    ? Panels.content
                                    : ""}
                                <img
                                    className="accordion-image"
                                    src={`${Panels.image}`}
                                    alt={`An image related to ${Panels.title}`}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function Accordions() {
    return <Accordion panels={panels} />;
}