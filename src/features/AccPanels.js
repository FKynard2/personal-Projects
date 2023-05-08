import HomeMaxSharpIcon from "@mui/icons-material/HomeMaxSharp";
import CasinoIcon from "@mui/icons-material/Casino";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import AppsOutageIcon from "@mui/icons-material/AppsOutage";
import myImage from "./images/pexels-markus-spiske-2004161.jpg";
import myImage2 from "./images/pexels-rdne-stock-project-7982830.jpg";
import myImage3 from "./images/pexels-startup-stock-photos-7369.jpg";
import myImage4 from "./images/pexels-mikhail-nilov-8101766.jpg";

const panels = [
    {
        id: 0,
        title: "Randomizer",
        content:
            "Have you ever wished to simplify a difficult decision, consider utilizing this randomizer to input your options and receive an unbiased outcome.",
        image: myImage,
        icon: <HomeMaxSharpIcon sx={{ color: "#25D99D" }} />,
        path: "/About",
    },
    {
        title: "Games",
        content:
            "Ahoy league hands Sea Legs keelhaul salmagundi fire ship crimp Privateer galleon. Booty boom yard boatswain quarter.",
        image: myImage2,
        icon: <CasinoIcon sx={{ color: "#27cdd8" }} />,
        path: "/Games",
    },
    {
        title: "Projects",
        content:
            "No prey, no pay heave down splice the main brace furl cable snow walk the plank chase guns piracy bucko.",
        image: myImage3,
        icon: <AccountTreeTwoToneIcon sx={{ color: "#2761D9" }} />,
        path: "/Projects",
    },
    {
        title: "Apps",
        content:
            "Deadlights squiffy salmagundi cable pinnace parrel topsail Corsair Arr mizzenmast.",
        image: myImage4,
        icon: <AppsOutageIcon sx={{ color: "#D82744" }} />,
        path: "/Apps",
    },
];


export default panels;