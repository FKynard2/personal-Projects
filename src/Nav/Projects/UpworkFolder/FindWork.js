import * as React from "react";

import {
    FindWorkWarpper,
    FindWorkBox,
    Search,
    SearchIconWrapper,
    SearchBarBox,
} from "../../../Styling/StyledComponents";
import SearchBar from "./SearchBar";
import SearchIcon from "@mui/icons-material/Search";

export default function FindWork({
    optionFilter,
    jobSelected,
    setJobSelected,
    catgories,
}) {
    return (
        <FindWorkWarpper>
            <FindWorkBox>Find work</FindWorkBox>
            <SearchBarBox>
                <Search>
                    <SearchBar
                        searchFitlerA={optionFilter}
                        setJobSelected={setJobSelected}
                    />
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                </Search>
            </SearchBarBox>
        </FindWorkWarpper>
    );
}
