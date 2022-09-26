import { useState } from "react";
import MeYoung from "../images/meyoung.JPEG";
import MeNow from "../images/me2.JPG"



export default function AboutPage() {
    const [ image, setImage ] = useState(MeYoung);
    const changeImage = () => {
        let value = image;
    
        if (value === MeYoung) {
          setImage(MeNow);
        } else {
          setImage(MeYoung);
        }
      };
    return (
        <section className="page">
           <div className="about-container">
            <div className="about-text">
                <h1>Hello!</h1>
                <p>My name is Oliwia and i'm a 19 year old student of Multimedia Design searching for an internship in frontend development.
                During my studies I acquired useful skills in multiple branches of Multimedia design: <b>UX/UI design, frontend development</b>  and <b> <br></br>content creation. </b> <br></br>Even though I love all of them, eventually it was programming that won my heart.<br></br> Right now, I'm eagerly learning <b>Javascript </b>and <b>ReactJS </b>.<br></br>
                <br></br>I'm a hard-working person that pays attention to details and functionality of the digital solutions I create.
                I love challenging myself and learning new things everyday.
                What helps me to keep on improving in programming is having distance to every problem I come across as I always see it as an opportunity to learn.<br></br>
                When I'm not programming, I love reading, skating, baking and video editing.</p>
            </div>

           

   
<div className="image-container">
           <div id="image">
            <img src={image} alt="Me"/> 
            </div>

            
         
           <button onClick={changeImage}>CUTE PHOTO, BUT NEXT</button>
           </div>
           </div>
        </section>
    );
}
