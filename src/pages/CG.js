import React from "react";


export default function CG() {
    return (
        <section className="page">
            <div className="front">
            <div className="project-text-vw">
            <div className="year">
                <p>2022</p>
            </div>
            <div className="project-title">
            <h1>Connecting <br></br> Grounds</h1>
            </div>
            <button className="button-black" >LIVE</button>
            </div>
<div className="mockup">
    <img src="../public/images/cgmock.png" alt="mockup"></img>
</div>
</div>

<div className="grid">
<div className="column">
        <th>TOOLS</th>
        <tr>Adobe XD/Photoshop/Illustrator/Dimension</tr>
        <tr>Github</tr>
        <tr>Visual Studio Code</tr>
        <tr>Procreate</tr>
        <tr>Adobe Premiere Pro</tr>
    </div>
    <div className="column">
        <th>TIMELINE</th>
        <tr>4 weeks</tr>
    </div>
   
    <div className="column">
        <th>TEAM</th>
        <tr>4 members</tr>
    </div>
</div>
<section className="problem-statement">
<th>PROBLEM STATEMENT</th>
<tr>“How can we help increase awareness of<br></br>
 Connecting Ground, help make the brand more recognizable, <br></br>
as well as strengthen the digital presence to expand the company’s customer base?”</tr>
</section>



        </section>
    );
}