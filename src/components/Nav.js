import { NavLink } from "react-router-dom";
import Logo from "../images/olol.svg"

export default function Nav() {
    return (
       
        <nav>
            <div className="logo">
        <NavLink to="/home"><img src={Logo} alt="logo"></img></NavLink>
        </div>
        <div className="nav-links">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/play">Play</NavLink>
            <NavLink to="/about">About</NavLink>
           
            </div>
        </nav>
    );
}
