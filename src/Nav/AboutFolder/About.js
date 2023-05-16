import Box from "@mui/material/Box";
import { RandomButton } from "../../features/RandomGen";
import TOPNAV from "../nav";

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
                        src="https://ik.imagekit.io/6of9atvnc/personal_project/simImage.jpg?updatedAt=1684202276539"
                        style={{
                            borderRadius: "50px",
                            // backgroundBlendMode: "multiply",
                            padding: "10px",
                        }}
                    />
                </ImageContainer>
                <RandomButton />
            </Box>
        </>
    );
}
