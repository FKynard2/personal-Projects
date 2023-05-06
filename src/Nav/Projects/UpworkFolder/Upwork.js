import ProjectNav from "../ProjectNav";
import Box from "@mui/material/Box";

export default function UPWORK() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "darkgrey",
                }}
            >
                <ProjectNav />
                <div>Upwork</div>
            </Box>
        </>
    );
}
