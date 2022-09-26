import React from 'react'
import "./footer.css";
import LinkedIn from "../images/linkedin.svg";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div id='footer'>
        <div className="copyright">
            <div className="some">
                <p>My social media</p>
                <a href='https://www.linkedin.com/in/oliwia-olender-416166220/'><img src={LinkedIn} alt="linkedin"></img></a>
            </div>
        <p>{`Copyright © ${year} Oliwia Olender All rights reserved`}</p>
        </div>
        </div>
    )
}

export default Footer
