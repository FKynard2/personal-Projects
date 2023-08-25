import * as React from "react";
import TopNav from "./TopNav";
import FindWork from "./FindWork";
import Categories from "./Categries";
import { ContentWarpper } from "../../../Styling/StyledComponents";
import { useState } from "react";
export default function JobBard({ allJobs, optionFilter }) {
    const [jobSelected, setJobSelected] = useState("");
    const catgories = [];
    for (let job of allJobs) {
        if (!catgories.includes(job.category)) {
            catgories.push(job.category);
        }
    }

    return (
        <>
            <TopNav
                allJobs={allJobs}
                catgories={catgories}
                optionFilter={optionFilter}
            />
            <ContentWarpper>
                <FindWork
                    optionFilter={optionFilter}
                    setJobSelected={setJobSelected}
                />
                <Categories
                    optionFilter={optionFilter}
                    allJobs={allJobs}
                    catgories={catgories}
                    jobSelected={jobSelected}
                    setJobSelected={setJobSelected}
                />
            </ContentWarpper>
        </>
    );
}
