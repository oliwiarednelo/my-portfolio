import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/Nav";
import ProjectsPage from "./pages/ProjectsPage";
import PlayPage from "./pages/PlayPage";
import CG from "./pages/CG";


   

function App() {
    return (
        <main>
            <Nav />
            
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/play" element={<PlayPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<Navigate to="/home" />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/CG" element={<CG />} />
            </Routes>
            
        </main>
    );
}

export default App;
