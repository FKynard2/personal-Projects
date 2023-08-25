import Typography from "@mui/material/Typography";
import * as React from "react";
import Divider from "@mui/material/Divider";

import { DetailsHeros, PRIMARY_GREEN } from "../../../Styling/StyledComponents";
import { useParams } from "react-router";

export default function DetailsHero({ allJobs, optionFilter }) {
    let { id: idFromURL } = useParams();
    const selectedJob = allJobs.find((job) => {
        return job.id === Number(idFromURL);
    });
    return (
        <DetailsHeros>
            <Typography sx={{ marginBottom: "2rem" }} variant="h4" gutterBottom>
                {selectedJob.title}
            </Typography>
            <Divider />
            <Typography
                sx={{
                    marginTop: "2rem",
                    color: PRIMARY_GREEN,
                    fontWeight: "bold",
                }}
                variant="subtitle1"
                gutterBottom
            >
                {selectedJob.category}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Posted {selectedJob.postedTime}
            </Typography>
            <Typography
                sx={{ marginBottom: "2rem" }}
                variant="subtitle1"
                gutterBottom
            >
                <img
                    src=" https://assets.codepen.io/6060109/location-icon.png"
                    alt="location"
                    style={{ height: "1rem", marginRight: "5px" }}
                />
                {selectedJob.remote ? "Remote, " : "(OnSite), "}
                {selectedJob.location}
            </Typography>
            <Divider />
            <Typography
                sx={{ marginBlock: "2rem" }}
                variant="body1"
                gutterBottom
            >
                {selectedJob.description}
            </Typography>
        </DetailsHeros>
    );
}
