import ProjectNav from "../ProjectNav";
import Box from "@mui/material/Box";

export default function Binace() {
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
                <div>Binace</div>
            </Box>
        </>
    );
}
