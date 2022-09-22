import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
       
        <nav>
            <div className="logo">
        <NavLink to="/home"><img src="images/olol.svg" className="logo" alt="logo"></img></NavLink>
        </div>
        <div className="nav-links">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/play">Play</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            </div>
        </nav>
    );
}
