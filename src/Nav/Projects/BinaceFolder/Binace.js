import ProjectNav from "../ProjectNav";
import Box from "@mui/material/Box";
import { useState } from "react";
import LeftContainer from "./LeftContainer";
import RightImage from "./RightImage";
import "./binace.css";


export default function Binace() {
    const [stage, setStage] = useState(0);
    
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "#745e5e",
                }}
            >
                <ProjectNav />
                <Box
                    sx={{
                        textAlign: "center",
                        height: "93vh",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <LeftContainer stage={stage} setStage={setStage} />
                    <RightImage stage={stage} />
                </Box>
            </Box>
        </>
    );
}
