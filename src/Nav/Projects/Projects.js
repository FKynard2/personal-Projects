import Box from "@mui/material/Box";

import ProjectNav from "./ProjectNav";

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
                <ProjectNav />
                <div>Projects</div>
            </Box>
        </>
    );
}
