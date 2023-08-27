import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HOME from "./Nav/Home/Home";
import ABOUT from "./Nav/AboutFolder/About";
import GAMES from "./Nav/Games/Games";
import PROJECTS from "./Nav/Projects/Projects";
import APPS from "./Nav/Apps/Apps";
//< This is for the projects section routes
import UPWORK from "./Nav/Projects/UpworkFolder/Upwork";
import LoginForm from "./Nav/Projects/UpworkFolder/loginform";
import JobBoard from "./Nav/Projects/UpworkFolder/JobBoard";
//< This is for UPWORK 
import { useState } from "react";

// import JobBoard from "./JobBoard";
import JobDetail from "./Nav/Projects/UpworkFolder/JobDetail";
import JOBS from "./Nav/Projects/UpworkFolder/jobs";
// import * as React from "react";

import BINACE from "./Nav/Projects/BinaceFolder/Binace";
import UBER from "./Nav/Projects/UberFolder/Uber";
//< This for the game section routes
import TICTACTOE from "./Nav/Games/TicTacToe/TicTacToe";
import CONNECTFOUR from "./Nav/Games/ConnectFour/ConnectFour";
import WORDLE from "./Nav/Games/Wordle/Wordle";
//< This for the app section routes
import MAXSTRONG from "./Nav/Apps/MaxStrongApp/MaxStrong";
import ThisApp from "./Nav/Apps/MaxStrongApp/ThisApp";
import AboutUs from "./Nav/Apps/MaxStrongApp/AboutUs";
import Contacts from "./Nav/Apps/MaxStrongApp/Contacts";

import DASHCAM from "./Nav/Apps/CamApp/DashCam";
import FOODAPP from "./Nav/Apps/FoodApp/FoodAppFile";




export default function App() {

const [allJobs, setAllJobs] = useState(JOBS);
const catgories = [];

for (let job of allJobs) {
    if (!catgories.includes(job.category)) {
        catgories.push(job.category);
    }
}
const optionFilter = [];
for (let value of catgories) {
    optionFilter.push({ category: value });
}


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
                    <Route path="/Upwork" element={<LoginForm />} />
                    <Route
                        path="/jobs"
                        element={
                            <JobBoard
                                allJobs={allJobs}
                                optionFilter={optionFilter}
                            />
                        }
                    />
                    <Route
                        path="/job/:id"
                        element={
                            <JobDetail
                                allJobs={allJobs}
                                optionFilter={optionFilter}
                            />
                        }
                    />
                    {/* End for the Upwork Project */}
                    <Route path="/Binace" element={<BINACE />} />
                    <Route path="/Uber" element={<UBER />} />
                    {/* These are for the routes on the game page */}
                    <Route path="/TicTacToe" element={<TICTACTOE />} />
                    <Route path="/ConnectFour" element={<CONNECTFOUR />} />
                    <Route path="/Wordle" element={<WORDLE />} />
                    {/* These are for the routes on the app page */}
                    <Route path="/MaxStrong" element={<MAXSTRONG />} />
                    <Route path="/ThisApp" element={<ThisApp />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/Contacts" element={<Contacts />} />

                    <Route path="/DashCam" element={<DASHCAM />} />
                    <Route path="/FoodApp" element={<FOODAPP />} />
                </Routes>
            </Router>
        </div>
    );
}
