import Box from "@mui/material/Box";
import Practice from "./pratice";
import TOPNAV from "../nav";

export default function Projects() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "darkgrey",
                }}
            >
               <TOPNAV />
                <Practice />
            </Box>
        </>
    );
}
