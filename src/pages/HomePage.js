import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Arrow from "../images/arrowdown.svg";
import CgMockup from "../images/cgmock.png";
import WdMockup from "../images/webdocmock.png";
import GkMockup from "../images/grundfosmock.png";

import Contact from "../components/Contact";

export default function HomePage() {

    return (
        <section className="page">
            <div className="front-page">
                <div className="career">
                <p>frontend developer & UX/UI designer</p>
                <div className="App">
              

                 <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Oliwia')
      .callFunction(() => {

      })
      .pauseFor(600)
      .deleteChars(4)
      typewriter.typeString('ender')
      .callFunction(() => {
  
      })
      .pauseFor(1000)
      .start();
      
  }}

  options={{
    delay: 100,
    loop: true,
    autoStart:true,
  }}
/>

</div>
            </div>

            
            <div className='arrow'>
              <p>See projects</p>
           <a href='#projects-page'><img src={Arrow} alt='arrow'></img></a>
            </div>
            </div>
            <div id='projects-page'>
            <div className="small-headline">
              <p>Projects</p>
            </div>
     <div id='first-card'>
            <Link to="/projects/cg" className="card-link">
            <Card 
            title='Connecting Grounds'
            image={CgMockup}
            body='Responsive website for a fresh startup Connecting Grounds,
            which is turning coffee waste into new products.'
            />
            </Link>
            </div>
            <div id='second-card'>
            <Link to="/projects/web-documentary" className="card-link">
            <Card 
            title='Web documentary'
            image={WdMockup}
            body='A website full of storytelling, with a purpose to give encouragement to people afraid of studying abroad.'
            />
            </Link>
            </div>
            <div id='third-card'>
            <Link to="/projects/grundfos-kollegiet" className="card-link">
            <Card 
            title='Grundfos Kollegiet'
            image={GkMockup}
            body='Prototype of an application which would be visible on a tablet in Grundfos Kollegiet.'
            />
                </Link>
            </div>

   </div>
   
         <div className="end-text">
           <p>Thanks for taking a look at my projects!<br></br>
Click on the link if you’d like to get to <br></br>
know <Link to="/about">me</Link> a bit better.</p>
         </div>
         
         <Contact />

      

</section>
    );
}
