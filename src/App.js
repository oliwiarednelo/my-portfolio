import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/Nav";
import PostsPage from "./pages/PostsPage";
import PlayPage from "./pages/PlayPage";

import ScrollToTop from "./components/ScrollToTop";
import PostPage from "./pages/PostPage";
import Footer from "./components/Footer";



   

function App() {
    return (

        <main>
              <ScrollToTop />
              

            <Nav />
           
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/play" element={<PlayPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects/:slug" element={<PostPage />} />
                <Route path="*" element={<Navigate to="/home" />} />
                <Route path="/projects" element={<PostsPage />} />
          
               
            </Routes>

            <Footer />
        </main>
    );
}

export default App;
