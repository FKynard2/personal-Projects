import Box from "@mui/material/Box";
import APPSNAV from "../AppsNav";

import MaxNav from "./MaxNav";

export default function ThisApp() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "#d7e4ff",
                    fontFamily: "Helvetica Neue",
                }}
            >
                <MaxNav sx={{ fontFamily: "Teko" }} />
                <div style={{ fontFamily: "Teko", fontSize: "48px" }}>
                    Hello
                </div>
            </Box>
        </>
    );
}
