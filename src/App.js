import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HOME from "./Nav/Home/Home";
import ABOUT from "./Nav/AboutFolder/About";
import GAMES from "./Nav/Games/Games";
import PROJECTS from "./Nav/Projects/Projects";
import APPS from "./Nav/Apps/Apps";
//< This is for the projects section routes
import UPWORK from "./Nav/Projects/UpworkFolder/Upwork";
import BINACE from "./Nav/Projects/BinaceFolder/Binace";
import UBER from "./Nav/Projects/UberFolder/Uber";
//< This for the game section routes
import TICTACTOE from "./Nav/Games/TicTacToe/TicTacToe";
import CONNECTFOUR from "./Nav/Games/ConnectFour/ConnectFour";
import WORDLE from "./Nav/Games/Wordle/Wordle";
//< This for the app section routes
import MAXSTRONG from "./Nav/Apps/MaxStrongApp/MaxStrong";
import DASHCAM from "./Nav/Apps/CamApp/DashCam";
import FOODAPP from "./Nav/Apps/FoodApp/FoodAppFile";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HOME />} />
                    <Route path="/About" element={<ABOUT />} />
                    <Route path="/Games" element={<GAMES />} />
                    <Route path="/Projects/*" element={<PROJECTS />} />
                    <Route path="/Apps" element={<APPS />} />
                    {/* These are for the routes on the project page */}
                    <Route path="/Upwork" element={<UPWORK />} />
                    <Route path="/Binace" element={<BINACE />} />
                    <Route path="/Uber" element={<UBER />} />
                    {/* These are for the routes on the game page */}
                    <Route path="/TicTacToe" element={<TICTACTOE />} />
                    <Route path="/ConnectFour" element={<CONNECTFOUR />} />
                    <Route path="/Wordle" element={<WORDLE />} />
                    {/* These are for the routes on the app page */}
                    <Route path="/MaxStrong" element={<MAXSTRONG />} />
                    <Route path="/DashCam" element={<DASHCAM />} />
                    <Route path="/FoodApp" element={<FOODAPP />} />
                </Routes>
            </Router>
        </div>
    );
}
