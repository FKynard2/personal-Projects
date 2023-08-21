import { styled, keyframes } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WestIcon from "@mui/icons-material/West";
// import { keyframes, styled } from "styled-components";
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

export const HODGIE_GOLD = "#907d29";
export const HODGIE_BROWN = "#6b5709";

export const PrimaryContainer = styled(Box)(() => ({
    width: "60%",
    maxWidth: "1350px",
    margin: "35% auto",
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
    maxWidth: "640px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "2px",
    padding: "50px",
    margin: "auto",
    fontSize: FONT_SMALL,
    color: "white",
    textAlign: "center",
    position: "relative",
    "@media (max-width: 1200px)": {
        width: "85%",
        padding: 0,
    },
    "@media (max-width: 1000px)": {
        width: "70%",
    },
    "@media (max-width: 800px)": {
        width: "75%",
    },
}));
export const GeneratedBtn = styled(Button)(() => ({
    padding: "10px",
    fontSize: FONT_SMALL,
    backgroundColor: "content-box",
    border: "1px solid white",
    color: "white",
    borderRadius: "10px",
}));

export const ButtonContainer = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    borderRadius: "2px",
    justifyContent: "space-between",
}));

export const SimSimSalabimContainer = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
}));
export const EmptyQuestion = styled(Typography)(() => ({
    position: "absolute",
    width: "100%",
    background: `rgb(67,41,28) linear-gradient(90deg, rgba(67,41,28,1) 7%, rgba(144,125,41,1) 53%, rgba(67,41,28,1) 92%)`,
    top: "0%",
    borderRadius: "10px",
    padding: "10px",
    fontSize: FONT_XS,
    "@media (max-width: 1200px)": {
        fontSize: FONT_SMALL,
    },
    "@media (max-width: 600px)": {
        minHeight: "405px",
        display: "flex",
        alignItems: "center",
    },
}));

export const ImageContainer = styled(Box)(() => ({
    width: "42%",
    margin: "20px auto",
    background: `rgb(67,41,28) linear-gradient(90deg, rgba(67,41,28,1) 7%, rgba(144,125,41,1) 53%, rgba(67,41,28,1) 92%)`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: "50px",
}));

export const Modal = styled(Box)(() => ({
    width: "30%",
    position: "absolute",
    backgroundColor: "rgb(67 41 28 / 67%);",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    color: HODGIE_BROWN,
    fontSize: FONT_XS,
    zIndex: "10",
    "@media (max-width: 600px)": {
        backgroundColor: STYLEING_PURPLE,
    },
}));

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-60px);
  }
  100% {
    transform: translateX(0);
  }
`;
export const RotatedWestIcon = styled(Box)`
    position: absolute;
`;
export const AnimatedWestIcon = styled(WestIcon)`
    animation: ${slideAnimation} 1s infinite;
    font-size: ${FONT_XXXL};
    position: absolute;
    color: white;
`;
//! This is for the styling of the connect 4 games
export const PlayerTypography = styled(Typography)(() => ({
    display: "flex",
}));
export const PlayerHero = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
    padding: "1.125rem",
}));
export const PlayerTokenBox = styled(Box)(() => ({
    backgroundColor: "lightgray",
    padding: "3px 10px",
    borderRadius: "10px",
}));
export const MainContent = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
}));
export const ColorChangeBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
}));
export const ColorChangeBtn1 = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: "2px",
}));
export const ColorChangeBtn2 = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: "2px",
}));

export const ConnectFourBoardBackground = styled(Box)(() => ({
    padding: "1rem",

    borderRadius: "2rem",
    margin: "2rem 2rem",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}));
export const ConnectFourBoard = styled(Box)(() => ({
    display: "flex",
}));
export const ConnectFourColumn = styled(Button)(() => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
}));
export const ConnectFourTile = styled(Box)(() => ({
    width: "70px",
    height: "70px",
    margin: "3px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkgray",
}));
export const Token = styled(Box)(() => ({
    borderRadius: "50%",
    width: "50px",
    height: "50px",
}));
export const BoardToken = styled(Box)(() => ({
    borderRadius: "50%",
    width: "100%",
    height: "100%",
}));


//This is for the tictactoe
export const Hero = styled(Box)(() => ({
    width: "80%",
    height: "80vh",
    margin: "0 auto",
    // backgroundColor: STYLEING_YELLOW,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
}));

export const PlayerSelect = styled(Box)(() => ({
    width: "100%",
    // backgroundColor: STYLEING_RED,
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "2px",
    padding: "10px 0"
}));