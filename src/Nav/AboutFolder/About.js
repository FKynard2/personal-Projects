import Box from "@mui/material/Box";
import { RandomButton } from "../../features/RandomGen";
import TOPNAV from "../nav";

export default function About() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "darkgrey",
                }}
            >
                <TOPNAV />
                <RandomButton />
            </Box>
        </>
    );
}
