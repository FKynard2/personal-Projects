import Box from "@mui/material/Box";
import TOPNAV from "../nav";
import PROJECTSACCDION from "./ProjectsAccordion";

export default function Projects() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                }}
            >
                <TOPNAV />
                <PROJECTSACCDION />
            </Box>
        </>
    );
}
