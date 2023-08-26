import { styled, keyframes } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WestIcon from "@mui/icons-material/West";
import Input from "@mui/material/Input";
import InputBase from "@mui/material/InputBase";
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

export const PRIMARY_GREEN = "#39B54A";
const SECONDARY_NAVY = "#2B5468";
const STEP_MEDIUM = "clamp(1.20rem, calc(0.94rem + 1.30vw), 2.50rem)";

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

//This for Wordle

export const ResetButton = styled(Button)(() => ({
    width: "10%",
    margin: " 20px auto",
    padding: "5px",
    fontSize: FONT_XXS,
    backgroundColor: "content-box",
    border: "2px solid green",
    color: "white",
    borderRadius: "10px",
}));

export const WordleHero = styled(Typography)(() => ({
    color: "green",
    width: "10%",
    textAlign: "center",
    margin: "20px auto",
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

//< This for upwork files 

export const LoginBox = styled(Box)(() => ({
    backgroundColor: "white",
    width: "400px",
    aspectRatio: "4/3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    boxSizing: "border-box",
}));

export const LoginContainer = styled(Box)(() => ({
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
export const LoginInput = styled(Input)`
    border: 1px solid ${PRIMARY_GREEN};
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
    border-bottom: "1px solid green";
    &:after {
        border-bottom: 2px solid #c094fc;
    }
    &:hover&:before {
        border-bottom: 2px solid ${PRIMARY_GREEN};
    }
`;

export const PrimaryButton = styled(Button)`
    background: ${PRIMARY_GREEN};
    width: 85%;
    border-radius: 20px;
    &:hover {
        background-color: ${SECONDARY_NAVY};
    }
`;

export const ContentWarpper = styled(Box)(() => ({
    width: "100%",
    height: "91.7vh",
    backgroundColor: "lightgrey",
    overflow: "scroll",
    color: "black",
}));


export const CatContentWrapper = styled(Box)`
    max-width: 1300px;
    width: 70%;
    height: 85%;
    margin: auto;
    display: flex;
    flex-direction: row;
    text-align: left;
    @media (max-width: 800px) {
        width: 85%;
    }
    @media (max-width: 550px) {
        width: 95%;
        flex-direction: column;
    }
`;

export const CatWrapper = styled(Box)`
    width: 25%;
    @media (max-width: 550px) {
        width: 100%;
    }
`;
export const ContentWrapper = styled(Box)`
    width: 75%;
    @media (max-width: 550px) {
        width: 100%;
    }
`;

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(1)})`,

        backgroundColor: "white",
    },
}));

export const TopToolBar = styled(Box)`
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    @media (min-width: 1800px) {
        width: 115rem;
        margin: auto;
    }
`;

export const FindWorkWarpper = styled(Box)`
    max-width: 1300px;
    width: 70%;
    height: 15%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 800px) {
        width: 85%;
    }

    @media (max-width: 550px) {
        margin-top: 2rem;
        width: 95%;
        flex-direction: column;
    }
`;

export const FindWorkBox = styled(Box)(() => ({
    width: "32%",
    fontSize: `${STEP_MEDIUM}`,
    fontWeight: "bold",
    textAlign: "left",
}));

export const SearchBarBox = styled(Box)(() => ({
    width: "100%",
}));

export const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    display: "flex",
    marginLeft: 0,
    width: "100%",
}));
export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    backgroundColor: PRIMARY_GREEN,
    color: "white",
    height: "100%",
    position: "absolute",
    right: "0px",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const ALT_STYLES = {
    color: PRIMARY_GREEN,
    fontWeight: "bold",
    paddingInline: "0px",
    textAlign: "left",
    justifyContent: "flex-start",
};

export const InputB = styled("input")(({ theme }) => ({
    width: "100%",
    padding: "10px",
    border: "none",
    backgroundColor: "transparent",
    color: theme.palette.mode === "light" ? "#000" : "#fff",
    borderColor: "white",
    outline: "none", // add this line to remove the focused border
}));

export const ListboxB = styled("ul")(({ theme }) => ({
    width: "100%",
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: "absolute",
    listStyle: "none",
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
    overflow: "auto",
    maxHeight: 200,
    border: "1px solid rgba(0,0,0,.25)",
    "& li.Mui-focused": {
        backgroundColor: "#4a8df6",
        color: "white",
        cursor: "pointer",
    },
    "& li:active": {
        backgroundColor: "#2977f5",
        color: "white",
    },
}));

export const LabelB = styled("label")({
    display: "block",
});
export const DetailsContainer = styled(Box)`
    max-width: 85rem;
    width: 67%;
    margin: auto;
    display: flex;
    padding-top: 9rem;
    height: 88vh;
    @media (max-width: 550px) {
        width: 90%;
        flex-direction: column;
    }
`;
export const DetailsHeros = styled(Box)`
    max-width: 80rem;
    width: 80%;
    height: 100%;
    margin: auto;
    text-align: left;
    @media (max-width: 550px) {
        width: 100%;
    }
`;
export const SideBars = styled(Box)`
    min-width: 220px;
    border-radius: 5px;
    background-color: white;
    max-height: 27rem;
    margin-left: 4rem;
    width: 35%;
    max-width: 350px;
    @media (max-width: 550px) {
        width: 100%;
        margin-left: 0px;
        margin: auto;
    }
`;

export const SecondaryButton = styled(Button)`
    background: transparent;
    border: 1px solid ${PRIMARY_GREEN};
    
    width: 85%;
    border-radius: 20px;
    &:hover {
        background-color: ${SECONDARY_NAVY};
    }
`;