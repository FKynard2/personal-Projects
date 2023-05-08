import Box from "@mui/material/Box";
import GAMEACCNAV from "./GamseAccordion"
import TOPNAV from "../nav";

export default function Games() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                }}
            >
                <TOPNAV />
                <GAMEACCNAV />
            </Box>
        </>
    );
}
