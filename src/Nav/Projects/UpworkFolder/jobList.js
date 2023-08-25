import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function JOBLIST({ jobs }) {
    return (
        <Paper>
            {jobs.map((job) => {
                return (
                    <Box key={job.id}>
                        <Box
                            sx={{
                                width: "100%",
                                backgroundColor: "white",
                                paddingBlock: "2em",
                            }}
                        >
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                                to={`/job/${job.id}`}
                            >
                                <Typography
                                    sx={{
                                        padding: "0 2rem",
                                        fontWeight: "bold",
                                    }}
                                    variant="h5"
                                    gutterBottom
                                >
                                    {job.title}
                                </Typography>
                            </Link>
                            <Typography
                                sx={{
                                    marginTop: "1rem",
                                    padding: "0 2rem",
                                    fontWeight: "bold",
                                }}
                                variant="subtitle1"
                                gutterBottom
                            >
                                Hourly: $ {job.hourlyUSD}
                            </Typography>
                            <Typography
                                sx={{ padding: "0 2rem", fontWeight: "bold" }}
                                variant="subtitle1"
                                gutterBottom
                            >
                                Posted {job.postedTime}
                            </Typography>
                            <Typography
                                sx={{ padding: "0 2rem", fontWeight: "bold" }}
                                variant="subtitle1"
                                gutterBottom
                            >
                                <img
                                    src=" https://assets.codepen.io/6060109/location-icon.png"
                                    alt="location"
                                    style={{
                                        height: "1rem",
                                        marginRight: "5px",
                                    }}
                                />
                                {job.remote ? "Remote" : "(onSite)"},{" "}
                                {job.location}
                            </Typography>
                            <Typography
                                sx={{ padding: "0 2rem" }}
                                variant="body2"
                                gutterBottom
                            >
                                {job.description}
                            </Typography>
                        </Box>
                        <Divider />
                    </Box>
                );
            })}
        </Paper>
    );
}
