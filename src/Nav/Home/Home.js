import Box from "@mui/material/Box";
import TOPNAV from "../nav";
import ACCORDION from "../../features/Accordion"

export default function Projects() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                }}
            >
               <TOPNAV />
               <ACCORDION />

            </Box>
        </>
    );
}
