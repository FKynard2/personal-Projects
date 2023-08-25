import TopNav from "./TopNav";
import Box from "@mui/material/Box";
import { DetailsContainer } from "../../../Styling/StyledComponents";
import DetailsHero from "./DetailsHero";
import SideBar from "./SideBar";
//this hook only works inside of the router

export default function JobDetail({ allJobs, optionFilter }) {
    return (
        <Box>
            <TopNav optionFilter={optionFilter} />
            <DetailsContainer>
                <DetailsHero allJobs={allJobs}></DetailsHero>
                <SideBar allJobs={allJobs}></SideBar>
            </DetailsContainer>
        </Box>
    );
}
