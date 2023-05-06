import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import myImage from "./images/pexels-billow-15443094.jpg";

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion
                sx={{
                    backgroundImage: `url(${myImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    minHeight: "10vh",
                    maxHeight: "100vh",
                   
                    color: "white"
                }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Users
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        You are currently not an owner
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{padding: "10rem"}}>
               
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    backgroundImage: `url(${myImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    minHeight: "10vh",
                    maxHeight: "100vh",
                   
                    color: "white"
                }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Users
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        You are currently not an owner
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{padding: "10rem"}}>
               
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    backgroundImage: `url(${myImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    minHeight: "10vh",
                    maxHeight: "100vh",
                   
                    color: "white"
                }}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Users
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        You are currently not an owner
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{padding: "10rem"}}>
               
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    backgroundImage: `url(${myImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    minHeight: "10vh",
                    maxHeight: "100vh",
                   
                    color: "white"
                }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Users
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        You are currently not an owner
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{padding: "10rem"}}>
               
                </AccordionDetails>
            </Accordion>
           
        </div>
    );
}
