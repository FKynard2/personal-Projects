import Box from "@mui/material/Box";

import GAMENAV from "../GamesNav";

export default function Wordle() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "darkgrey",
                }}
            >
                <GAMENAV />
                <div>Wordle</div>
            </Box>
        </>
    );
}
