import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HOME from "./Home";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HOME />} />
                </Routes>
            </Router>
        </div>
    );
}
