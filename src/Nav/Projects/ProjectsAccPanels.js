import HomeMaxSharpIcon from "@mui/icons-material/HomeMaxSharp";
import CasinoIcon from "@mui/icons-material/Casino";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import AppsOutageIcon from "@mui/icons-material/AppsOutage";

import {
    codingImg,
    gamesImg,
    projectsImg,
    appsImg,
} from "../../features/images/imageUrl";

const panels = [
    {
        id: 0,
        title: "Projects",
        content:
            "Have you ever wished to simplify a difficult decision, consider utilizing this randomizer to input your options and receive an unbiased outcome.",
        image: projectsImg,
        icon: <AccountTreeTwoToneIcon sx={{ color: "#2761D9" }} />,
        path: "/Projects",
    },
    {
        title: "Upwork",
        content:
            "Ahoy league hands Sea Legs keelhaul salmagundi fire ship crimp Privateer galleon. Booty boom yard boatswain quarter.",
        image: appsImg,
        icon: <AppsOutageIcon sx={{ color: "#D82744" }} />,
        path: "/Upwork",
    },
    {
        title: "Uber",
        content:
            "No prey, no pay heave down splice the main brace furl cable snow walk the plank chase guns piracy bucko.",
        image: gamesImg,
        icon: <CasinoIcon sx={{ color: "#27cdd8" }} />,
        path: "/Uber",
    },
    {
        title: "Binace",
        content:
            "Deadlights squiffy salmagundi cable pinnace parrel topsail Corsair Arr mizzenmast.",
        image: codingImg,
        icon: <HomeMaxSharpIcon sx={{ color: "#25D99D" }} />,
        path: "/Binace",
    },
];

export default panels;
