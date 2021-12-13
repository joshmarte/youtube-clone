import React from 'react';
import './About.css'


const About = () => {
  return (
    <div className= "aboutPage">
      <h2>About</h2>
      <h3>Brief Description</h3>

      <p>The youtube clone that we have created a React application that lets you search for YouTube videos using the YouTube API.</p>
      </div>

      <div className='creators'>
      <h4>The Creators of the project</h4>
      </div>

      <div>
        
        <div className="bios">
          
          <div className="tellMeMore">
          
            <div><img className="faceCard" src="https://media-exp1.licdn.com/dms/image/C4D03AQF26_amAxAbxw/profile-displayphoto-shrink_800_800/0/1606243992646?e=1644451200&v=beta&t=5covpchcGJuAXb2rIR68wOkVJPkDO2LminSIyixmmg0" alt="theopic" /></div>
            
            <div className="name">Theodore</div>
 
            <div className="contactInfo">
              <a href="https://www.linkedin.com/in/theodore-frazier/">LinkedIn Profile | </a>
              <a href="https://github.com/TheodoreBFrazier">GitHub</a>
            </div>
            
            <p> Zodiac Sign: Cancer </p>
            
            <p className="aboutParagaph">
              My background prior to Pursuit is in customer service and office administration, where I have proven myself to be a loyal and contentious employee at several top tier organizations, where I refined my communication skills, mastering the ability communicate clearly and concisely. I am grateful for my opportunity at Pursuit as it allows me the opportunity to gain the skills necessary to bring my experience to the fast-growing tech field. My goal is be able to build impactful and beautiful client interfaces that convert customers into clients. My hobbies innclude playing the oboe, and exploring the sights of New York City.
            </p>

          </div>

          <div className="tellMeMore">
            <div>
              
              <img className="faceCard" src="https://media-exp1.licdn.com/dms/image/C4E03AQFHO4t4HsXEQQ/profile-displayphoto-shrink_400_400/0/1628525034697?e=1644451200&v=beta&t=mBHqirWaOTRrzrWLW6GpTSlckI9lXaaOaiSEKmPlVhA" alt="joshpic" /></div>

            <div className="name">Josh</div>

            <div className="contactInfo">
              <a href="https://www.linkedin.com/in/josh-marte/">LinkedIn Profile | </a>
              <a href="https://github.com/joshmarte/" target= "_blank" id="link">GitHub</a>
            </div>
            
            <p> Zodiac Sign: Virgo </p>

            <p className="aboutParagaph">

              Hello, I go by Josh. I am an experienced professional with a diverse background in project management and business intelligence. I am currently working to further develop my software development/engineering skills, and applying those skills to big data projects that would help improve my community and green initiatives.

              I am passionate about consumer rights, machine learning, privacy and ethical implementation of algorithms.

              My hobbies include birdwatching, mushroom foraging, exploring nature, soccer and basketball.
            </p>
          </div>

          <div className="tellMeMore">
            <div>
              
              <img className="faceCard" src="https://media-exp1.licdn.com/dms/image/C4D03AQGhOggyBlMCew/profile-displayphoto-shrink_400_400/0/1609928869014?e=1644451200&v=beta&t=3idiR0Y58qDNCTByhTeJ7y0J4aZ-Vuf5sdc1OgJOwrs" alt="kiyomipic" /></div>

            <div className="name">Kiyomi</div>

            <div className="contactInfo">
              <a href="https://www.linkedin.com/in/kiyomi-rodgers-denniston-327764177/">LinkedIn Profile | </a>
              <a href="https://github.com/KiRodgersDenn">GitHub</a>
              <p>Zodiac Sign: Leo</p>
            </div>
            
            <p className="aboutParagaph">
 I have been teaching for five years now and am ready to take the skills that I have learned in Education to a new career in Technology. As a teacher I have learned the art of patience, the need to be flexible and the importance of creativity. My students make up such a large portion of my world that it is hard to imagine a world that doesn’t include them—I am embarking on this new journey so that I can show them that there are other career options available and the path most taken isn’t the only path.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
export default About;

