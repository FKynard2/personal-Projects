import HomeMaxSharpIcon from "@mui/icons-material/HomeMaxSharp";
import CasinoIcon from "@mui/icons-material/Casino";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import AppsOutageIcon from "@mui/icons-material/AppsOutage";
import myImage from "../../features/images/pexels-mikhail-nilov-8101766.jpg";
import myImage2 from "../../features/images/pexels-rdne-stock-project-7982830.jpg";
import myImage3 from "../../features/images/pexels-startup-stock-photos-7369.jpg";
import myImage4 from "../../features/images/pexels-billow-15443094.jpg";

const panels = [
    {
        id: 0,
        title: "Apps",
        content:
            "Have you ever wished to simplify a difficult decision, consider utilizing this randomizer to input your options and receive an unbiased outcome.",
        image: myImage,
        icon: <AppsOutageIcon sx={{ color: "#D82744" }} />,
        path: "/Apps",
    },
    {
        title: "MaxStrong",
        content:
        "Ahoy league hands Sea Legs keelhaul salmagundi fire ship crimp Privateer galleon. Booty boom yard boatswain quarter.",
        image: myImage2,
        icon: <CasinoIcon sx={{ color: "#27cdd8" }} />,
        path: "/MaxStrong",
    },
    {
        title: "DashCam",
        content:
        "No prey, no pay heave down splice the main brace furl cable snow walk the plank chase guns piracy bucko.",
        image: myImage3,
        icon: <AccountTreeTwoToneIcon sx={{ color: "#2761D9" }} />,
        path: "/DashCam",
    },
    {
        title: "FoodApp",
        content:
        "Deadlights squiffy salmagundi cable pinnace parrel topsail Corsair Arr mizzenmast.",
        image: myImage4,
        path: "/FoodApp",
        icon: <HomeMaxSharpIcon sx={{ color: "#25D99D" }} />,
    },
];

export default panels;
