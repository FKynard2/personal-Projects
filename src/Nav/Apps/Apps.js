import Box from "@mui/material/Box";
import APPSNAV from "./AppsNav"



export default function Apps() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "darkgrey",
                }}
            >
                <APPSNAV />
                <div>apps</div>
            </Box>
        </>
    );
}
