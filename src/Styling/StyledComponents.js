import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import {
    STYLEING_YELLOW,
    STYLEING_GREEN,
    STYLEING_BLUE,
    STYLEING_ORANGE,
    STYLEING_PURPLE,
    STYLEING_RED,
} from "./DefaultStyling";

export const FONT_XXS = "clamp(0.69rem, calc(0.58rem + 0.59vw), 1.28rem)";
export const FONT_XS = "clamp(0.83rem, calc(0.68rem + 0.77vw), 1.60rem)";
export const FONT_SMALL = "clamp(1.00rem, calc(0.80rem + 1.00vw), 2.00rem)";
export const FONT_MEDIUM = "clamp(1.20rem, calc(0.94rem + 1.30vw), 2.50rem)";
export const FONT_LARGE = "clamp(1.44rem, calc(1.10rem + 1.69vw), 3.13rem)";
export const FONT_XL = "clamp(1.73rem, calc(1.29rem + 2.18vw), 3.91rem)";
export const FONT_XXL = "clamp(2.07rem, calc(1.51rem + 2.81vw), 4.88rem)";
export const FONT_XXXL = "clamp(2.49rem, calc(1.77rem + 3.62vw), 6.10rem)";

export const PrimaryContainer = styled(Box)(() => ({
    width: "60%",
    maxWidth: "1350px",
    margin: "35% auto",
    backgroundColor: STYLEING_YELLOW,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transform: "rotate(270deg)",
    fontSize: FONT_XS,
    "@media (max-width: 600px)": {
        transform: "rotate(0deg)",
    },
}));
export const Card = styled(Box)(() => ({
    width: "40%",
    minWidth: "245px",
    backgroundColor: STYLEING_GREEN,
    display: "flex",
    flexDirection: "column",
    borderRadius: "2px",
    "@media (max-width: 600px)": {
        backgroundColor: STYLEING_PURPLE,
        color: "white",
        fontSize: FONT_XXS,
        width: "100%",
    },
}));

export const GeneratedBtnContainer = styled(Box)(() => ({
    width: "50%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "2px",
    padding: "50px",
    margin: "auto",
    fontSize: FONT_MEDIUM,
    color: "white",
}));
export const GeneratedBtn = styled(Button)(() => ({
    padding: "10px",
    fontSize: "32px",
    backgroundColor: "content-box",
    border: "1px solid white",
    color: "white",
    borderRadius: "10px",
}));

export const ButtonContainer = styled(Box)(() => ({
    width: "35%",
    display: "flex",
    flexDirection: "row",
    borderRadius: "2px",
    justifyContent: "space-between",
}));
