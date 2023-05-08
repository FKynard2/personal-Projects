import Box from "@mui/material/Box";
import APPSACCORIONS from "./AppsAccordion"
import TOPNAV from "../nav"



export default function Apps() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                
                }}
            >
                <TOPNAV />
                <APPSACCORIONS />
                
            </Box>
        </>
    );
}
