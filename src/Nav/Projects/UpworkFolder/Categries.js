import * as React from "react";
import Typography from "@mui/material/Typography";
import JOBSLIST from "./jobList";
import BasicButtons from "./BasicButtons";
import {
    CatContentWrapper,
    CatWrapper,
    ContentWrapper,
} from "../../../Styling/StyledComponents";

export default function Categories({
    catgories,
    allJobs,
    jobSelected,
    setJobSelected,
}) {
    return (
        <CatContentWrapper>
            <CatWrapper>
                <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="h5"
                    gutterBottom
                >
                    Categories
                </Typography>
                <BasicButtons
                    jobSelected={jobSelected}
                    catgories={catgories}
                    setJobSelected={setJobSelected}
                />
            </CatWrapper>
            <ContentWrapper>
                <JOBSLIST
                    jobs={allJobs.filter((job) =>
                        !jobSelected
                            ? job.category
                            : job.category === jobSelected
                    )}
                />
            </ContentWrapper>
        </CatContentWrapper>
    );
}
