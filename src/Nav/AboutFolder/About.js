import { useState } from "react";
import Box from "@mui/material/Box";
import { RandomButton } from "../../features/RandomGen";
import TOPNAV from "../nav";
import { Modal } from "../../Styling/StyledComponents";
import {
    ImageContainer,
    GeneratedBtn,
    GeneratedBtnContainer,
    RotatedWestIcon,
    AnimatedWestIcon,
} from "../../Styling/StyledComponents";

export default function About() {
    const [stage, setStage] = useState(0);
    let content;

    if (stage === 0) {
        content = <></>;
    } else if (stage === 1) {
        content = (
            <>
                <RotatedWestIcon
                    sx={{
                        transform: "rotate(270deg)",
                        top: "60%",
                        left: "60%",
                    }}
                >
                    <AnimatedWestIcon />
                </RotatedWestIcon>
                <Modal sx={{ top: "30%", left: "10%", padding: "10px" }}>
                    Hodgie can provide predictive guidance by answering a single
                    question. You may ask Hodgie simple yes or no questions such
                    as, "Should I buy a car?", "Should I go on vacation?", or
                    "Should I stay at home?" Hodgie's expertise will help you
                    navigate the decision-making process effectively.
                </Modal>
            </>
        );
    } else if (stage === 2) {
        content = (
            <>
                <RotatedWestIcon
                    sx={{
                        transform: "rotate(270deg)",
                        bottom: "16%",
                        right: "45%",
                    }}
                >
                    <AnimatedWestIcon />
                </RotatedWestIcon>
                <Modal sx={{ top: "30%", right: "10%", padding: "10px" }}>
                    Hodgie can assist you further by considering multiple
                    questions, allowing for a comprehensive decision-making
                    process. Just like playing the options-in-a-hat game, you
                    can provide Hodgie with various questions, such as names,
                    dining choices, or vacation destinations. Hodgie's expertise
                    will make these decisions a breeze, ensuring you have a
                    smooth and enjoyable experience. Let's simplify the
                    decision-making process together!
                </Modal>
            </>
        );
    }
    if (stage === 3) {
        setStage(0);
    }
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    // backgroundImage: `url(${bgImage})`,
                    // backgroundSize: "contain",
                    // backgroundRepeat: "no-repeat",
                    // backgroundPosition: "center",
                    // height: "100vh",
                }}
            >
                <TOPNAV />
                {content}
                <ImageContainer>
                    <img
                        src="https://ik.imagekit.io/6of9atvnc/personal_project/simImage.jpg?updatedAt=1684202276539"
                        style={{
                            borderRadius: "50px",
                            // backgroundBlendMode: "multiply",
                            padding: "10px",
                        }}
                    />
                </ImageContainer>
                <GeneratedBtnContainer>
                    <GeneratedBtn onClick={() => setStage(stage + 1)}>
                        How to Use
                    </GeneratedBtn>
                </GeneratedBtnContainer>
                <RandomButton setStage={stage} />
            </Box>
        </>
    );
}
