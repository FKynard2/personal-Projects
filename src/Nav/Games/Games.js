import Box from "@mui/material/Box";


import GAMENAV from "../Games/GamesNav";

export default function Games() {
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
                <div>Games</div>
            </Box>
        </>
    );
}
