import Box from "@mui/material/Box";
import APPSNAV from "../AppsNav";

export default function DashCam() {
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
                <div>DashCam</div>
            </Box>
        </>
    );
}
