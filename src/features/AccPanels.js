import HomeMaxSharpIcon from "@mui/icons-material/HomeMaxSharp";
import CasinoIcon from "@mui/icons-material/Casino";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import AppsOutageIcon from "@mui/icons-material/AppsOutage";
import { codingImg, gamesImg, projectsImg, appsImg } from "./images/imageUrl";



const panels = [
    {
        id: 0,
        title: "Randomizer",
        content:
            "Have you ever wished to simplify a difficult decision, consider utilizing this randomizer to input your options and receive an unbiased outcome.",
        image: codingImg,
        icon: <HomeMaxSharpIcon sx={{ color: "#25D99D" }} />,
        path: "/About",
    },
    {
        title: "Games",
        content:
            "Ahoy league hands Sea Legs keelhaul salmagundi fire ship crimp Privateer galleon. Booty boom yard boatswain quarter.",
        image: gamesImg,
        icon: <CasinoIcon sx={{ color: "#27cdd8" }} />,
        path: "/Games",
    },
    {
        title: "Projects",
        content:
            "No prey, no pay heave down splice the main brace furl cable snow walk the plank chase guns piracy bucko.",
        image: projectsImg,
        icon: <AccountTreeTwoToneIcon sx={{ color: "#2761D9" }} />,
        path: "/Projects",
    },
    {
        title: "Apps",
        content:
            "Deadlights squiffy salmagundi cable pinnace parrel topsail Corsair Arr mizzenmast.",
        image: appsImg,
        icon: <AppsOutageIcon sx={{ color: "#D82744" }} />,
        path: "/Apps",
    },
];

export default panels;
