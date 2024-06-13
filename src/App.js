import './App.css';
import { ReactComponent as Photo } from './Atharva.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGraduationCap, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Alert from '@mui/material/Alert';
import AnimatedText from './AnimatedText';
import { Block } from '@mui/icons-material';

function App() {
  return (
    <div className="container">
      <div className="left-column">
        <h1 style={{marginBottom: 0}}><a className="iconAHref" href='/'>Atharva Kashyap</a></h1>
        <p style={{marginTop: 0, marginBottom: 0}}>ಅಥರ್ವ ಕಶ್ಯಪ್ / अथर्व कश्यप्</p>
        <p style={{marginTop: 0}}><strong>Pronouns:</strong> He/Him</p>
        <Photo className='photo' />
        <div className='links'>
          <p><a className="iconAHref" href='mailto:atharva2@uw.edu'><u>Email Me!</u></a>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icon" icon={faEnvelope} size="lg"/></p>
          <p><a className="iconAHref" href='https://www.github.com/atharva-kashyap/'><u>GitHub</u></a>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icon" icon={faGithub} size="lg"/></p>
          <p><a className="iconAHref" href='https://www.https://scholar.google.com/citations?user=JCoq_vAAAAAJ&hl=en&oi=ao.com/atharva-kashyap/'><u>Google Scholar</u></a>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icon" icon={faGraduationCap} size="lg"/></p>
          <p><a className="iconAHref" href='https://www.linkedin.com/in/atharva-kashyap/'><u>LinkedIn</u></a>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icon" icon={faLinkedin} size="lg"/></p>
          <p><a className="iconAHref" href='https://drive.google.com/file/d/1ECaCapx7_ZF_z1mGyR656TcuoX6DbFmi/view?usp=sharing' target="_blank"><u>1-page Resume</u></a> / <a className="iconAHref" href='https://drive.google.com/file/d/1jPm_Et-cJICGZ2u_ttCNznor17O_dTZx/view?usp=sharing' target="_blank"><u>CV</u></a>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icon" icon={faFile} size="lg"/></p>
        </div>
      </div>

      <div className="right-column">
        <AnimatedText />
        <p>I am an incoming first-year <strong>___</strong> Ph.D. student at ___, advised by Prof. ___ and graciously supported by ___. My research interests broadly lie in Human-Robot Interaction, Assistive Robotics, and Robot Learning.</p>

        <p>I completed my bachelor's degree in <strong>Computer Science</strong> from the <a href="https://www.cs.washington.edu/">Paul G. Allen School of Computer Science & Engineering</a> at the <a href='http://www.washington.edu/'>University of Washington</a>, Seattle. I also minored in <strong>Applied Mathematics</strong> and <strong>Education, Learning & Societies</strong>.</p>

        <h2>Research</h2>
        <h3>UW CSE Personal Robotics Lab</h3>
        <p>Previously, I was a research assistant at UW's <a href='https://personalrobotics.cs.washington.edu/'>Personal Robotics Lab</a>, under the mentorship of Prof. <a href="https://goodrobot.ai/">Siddhartha Srinivasa</a>, PostDoc <a href="https://www.taylorkesslerfaulkner.com/">Taylor Kessler Faulkner</a>, and Ph.D. student <a href="https://amalnanavati.com/">Amal Nanavati</a>.</p>

        {/* <p>I am currently working on Robot-Assisted Feeding research using the Assistive Dextrous Arm robot. Past work on this system has primarily focused on making it functional (for instance, picking up variety of food items, moving the food item to the user's mouth, etc.). As part of a User Study (Paper XXX) conducted by deploying the system at a user's home for a week, it was crucial to have an accessible interface that users can use to interact with the robot.</p> */}

        <p>I conducted Robot-Assisted Feeding research using the Assistive Dextrous Arm (ADA) robot. As part of the system's week-long deployment at a user's home, it was crucial to have an accessible interface for the user to interact with the robot.</p>

        <p>I designed the overall state machine and implemented the first version of the app [<a href='https://github.com/personalrobotics/feeding_web_interface'>GitHub</a>], which interspersed asking for user input (e.g., what bite users want) with displaying the current state of the robot (e.g., robot is attempting to acquire bite). Several of these components required running smaller user studies. For instance, we were unsure how users would want to specify to the robot which piece of food they want – would they want to be shown a picture of the plate and click on their desired food, or would they want labels of the food items (e.g., “strawberry”, “salad”) to pick from? [<a href='https://drive.google.com/file/d/18S-5EefBi_lWHtQcQSPkr3Nc1qD13SbC/view?usp=sharing' target="_blank">Poster</a>, May 2023]</p>

        <p>In addition, currently, a user has to manually confirm the presence of food on the fork, which can be cumbersome to some users. I worked to develop an automatic Food on Fork (FoF) algorithm to confirm the presence of food on the fork. </p>
        <p>[<a href='https://dl.acm.org/doi/10.1145/3610978.3641085'>HRI 2024 Demo Paper</a>][<a href='https://github.com/personalrobotics/ada_feeding'>GitHub</a>] [Video]</p>

        <h2>Teaching</h2>
        <h3>Teaching Assistant for Introductory Programming</h3>
        <p>I am a lead Teaching Assistant (TA) for the Allen School's Introductory Programming (CSE 12x) classes. More specifically, each quarter, I conduct 2-times weekly Quiz sections, covering topics in data types, conditionals, methods, data structures (lists, dictionaries, sets, trees), object-oriented programming, recursion, and run-time analysis. In addition, I evaluated and provided constructive feedback on student work. I also authored several practice questions, created practice final, wrote JUnit tests for autograding, and recorded walkthrough videos for several topics. As a lead TA, I also supported a team of 25+ TAs and the instructor by creating agendas and teaching resources to help teach section.</p>

        <h2>Industry</h2>
        <h3>Arc Security</h3>
        <p>I have served as the VP of Engineering for a local startup, Arc Security. I oversaw a team of 4 developers, managed timelines, and conducted testing. We developed a product that consisted of mobile and web applications to foster real estate safety. The mobile app enabled agents to track their safety during on-site visits and the web app enabled managers to track agent safety.</p>
        <p>[<a href='https://github.com/arc-securitas/webapp'>GitHub</a>]</p>

        <h3>Amazon Robotics Manipulation Project</h3>
        <p>During Summer 2022, I worked as a Software Development Engineering Intern on a Robotics project (a UW and Amazon Robotics collaboration). I developed a web application to conduct evaluations. An evaluation entailed scanning and stowing Amazon products into bins and then allowing the robot to pick specified items from the bins. The web application served as a live interface (by displaying various bin metrics) for users to track the progress of the evaluation.</p>
        <p>[<a href='https://github.com/au-rmr/aurmr_inventory'>GitHub</a>]</p>

        <h2>Other</h2>
        <p>I have previously served as the Technical Director of a UW organization, <a href='https://dubvelopersuw.org/'>DUBvelopers</a>, where I supported in putting together Web Development workshops for 60+ beginners to acquire skills necessary to provide <i>pro bono</i> web development services to local small businesses.</p>

        <p>I am a regular dog-walking volunteer at <a href='https://www.seattlehumane.org/'>Seattle Humane</a> in Bellevue, WA. Previously, I have also served as volunteer-assistant for Dog/Puppy training classes. And, prior to that, I was an Education volunteer supporting the Humane Teen Club (HTC) for school students to explore animal welfare topics. Before that, I, myself, was a HTC member!</p>
      </div>
    </div>
  );
}

export default App;
