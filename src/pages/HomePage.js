import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";


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
        console.log('String typed out!');
      })
      .pauseFor(600)
      .deleteChars(4)
      typewriter.typeString('ender')
      .callFunction(() => {
        console.log('String typed out!');
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
            </div>
            <div className="small-headline">
              <p>Projects</p>
            </div>
         
         <div className="end-text">
           <p>Thanks for taking a look at my projects!<br></br>
Click on the links if you’d like to get to <br></br>
know <Link to="/about">me</Link> a bit better.</p>
         </div>
         <div className="some">
         <div className="small-headline">
           <p>My social media</p>
            </div>
         <img src="images/linkedin.svg" alt="Linkedin logo"></img>
         </div>
         <Link to="/CG">CG</Link>
</section>
    );
}
