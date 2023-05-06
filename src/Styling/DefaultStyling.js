import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const STYLEING_RED = "#c13f59";
export const STYLEING_ORANGE = "#e06100";
export const STYLEING_PURPLE = "#7700e0";
export const STYLEING_BLUE = "#0070e0";
export const STYLEING_GREEN = "#33ad20";
export const STYLEING_YELLOW = "#fff600";

export const FONT_XXS = "clamp(0.69rem, calc(0.58rem + 0.59vw), 1.28rem)";
export const FONT_XS = "clamp(0.83rem, calc(0.68rem + 0.77vw), 1.60rem)";
export const FONT_SMALL = "clamp(1.00rem, calc(0.80rem + 1.00vw), 2.00rem)";
export const FONT_MEDIUM = "clamp(1.20rem, calc(0.94rem + 1.30vw), 2.50rem)";
export const FONT_LARGE = "clamp(1.44rem, calc(1.10rem + 1.69vw), 3.13rem)";
export const FONT_XL = "clamp(1.73rem, calc(1.29rem + 2.18vw), 3.91rem)";
export const FONT_XXL = "clamp(2.07rem, calc(1.51rem + 2.81vw), 4.88rem)";
export const FONT_XXXL = "clamp(2.49rem, calc(1.77rem + 3.62vw), 6.10rem)";

// import {
//     STYLEING_YELLOW,
//     STYLEING_GREEN,
//     STYLEING_BLUE,
//     STYLEING_ORANGE,
//     STYLEING_PURPLE,
//     STYLEING_RED,
// } from "./DefaultStyling";


export const ContainerYellow = styled(Box)(() => ({
    width: "80%",
    margin: "0 auto",
    backgroundColor: STYLEING_YELLOW,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
}));
export const SecondaryGreen = styled(Box)(() => ({
    width: "40%",
    backgroundColor: STYLEING_GREEN,
    display: "flex",
    flexDirection: "column",
    borderRadius: "2px",
}));
export const ContainerRed = styled(Box)(() => ({
    width: "50%",
    backgroundColor: STYLEING_RED,
    display: "flex",
    flexDirection: "column",
    borderRadius: "2px",
}));
export const ContainerOrange = styled(Box)(() => ({
    width: "50%",
    backgroundColor: STYLEING_ORANGE,
    display: "flex",
    flexDirection: "row",
    borderRadius: "2px",
}));
export const ContainerPurple = styled(Box)(() => ({
    width: "50%",
    backgroundColor: STYLEING_PURPLE,
    display: "flex",
    flexDirection: "column",
    borderRadius: "2px",
}));
export const ContainerBlue = styled(Box)(() => ({
    width: "50%",
    backgroundColor: STYLEING_BLUE,
    display: "flex",
    flexDirection: "column",
    borderRadius: "2px",
    "@media (max-width: 600px)": {
        backgroundColor: STYLEING_PURPLE,
    },
}));
