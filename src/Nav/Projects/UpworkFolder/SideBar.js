import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import * as React from "react";
import { useParams } from "react-router";

import {
    SideBars,
    PrimaryButton,
    SecondaryButton,
    PRIMARY_GREEN,
} from "../../../Styling/StyledComponents";

export default function SideBar({ allJobs }) {
    let { id } = useParams();
    const selectedJob = allJobs.find((job) => {
        return job.id === Number(id);
    });
    return (
        <SideBars>
            <PrimaryButton
                sx={{ marginBlock: "25px 10px", marginInline: "6%" }}
                variant="contained"
            >
                Submit a Porposal
            </PrimaryButton>
            <SecondaryButton
                sx={{
                    marginBlock: "10px 20px",
                    color: PRIMARY_GREEN,
                    marginInline: "6%",
                }}
                variant="contained"
            >
                <img
                    style={{ marginRight: "5px" }}
                    src="https://assets.codepen.io/6060109/heart-icon.png"
                    alt=""
                />
                Save Job
            </SecondaryButton>
            <Divider />
            <Typography
                sx={{
                    textAlign: "left",
                    marginTop: "20px",
                    marginInline: "30px",
                }}
                variant="subtitle1"
                gutterBottom
            >
                About the Client
            </Typography>
            <Typography
                sx={{ textAlign: "left", margin: "0 30px" }}
                variant="body2"
                gutterBottom
            >
                <img
                    style={{ marginRight: "10px", width: "12px" }}
                    src="https://assets.codepen.io/6060109/check-icon.png"
                    alt=""
                />
                {selectedJob.paymentVerified
                    ? "Payment Verified"
                    : "Not Varified"}
            </Typography>
            <Typography
                sx={{ textAlign: "left", margin: "20px 30px 30px 30px" }}
                variant="body2"
                gutterBottom
            >
                <img
                    style={{ marginRight: "5px", width: 12 }}
                    src="https://assets.codepen.io/6060109/location-icon-alt.png"
                    alt=""
                />
                {selectedJob.location}
            </Typography>
            <Typography
                sx={{
                    marginTop: "3rem",
                    textAlign: "left",
                    marginLeft: "30px",
                }}
                variant="subtitle1"
                gutterBottom
            >
                Job link
            </Typography>
            <Typography
                sx={{
                    width: "70%",
                    color: "lightgrey",
                    marginLeft: "30px",
                    overflow: "hidden",
                    backgroundColor: "#f2f2f2",
                }}
                variant="subtitle1"
                gutterBottom
            >
                https://www.website.com/c
            </Typography>
            <Typography
                sx={{
                    color: PRIMARY_GREEN,
                    fontWeight: "bold",
                    textAlign: "left",
                    marginLeft: "30px",
                    marginBottom: "25px",
                }}
                variant="subtitle1"
                gutterBottom
            >
                Copy Link
            </Typography>
        </SideBars>
    );
}
