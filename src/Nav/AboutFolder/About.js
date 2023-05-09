import Box from "@mui/material/Box";
import { RandomButton } from "../../features/RandomGen";
import TOPNAV from "../nav";
import bgImage from "../../features/images/simsim.jpg";
import { ImageContainer } from "../../Styling/StyledComponents";

export default function About() {
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
                <ImageContainer>
                    <img
                        src={bgImage}
                        style={{
                            borderRadius: "50px",
                            // backgroundBlendMode: "multiply",
                            padding: "10px"
                        }}
                    />
                </ImageContainer>
                <RandomButton />
            </Box>
        </>
    );
}
