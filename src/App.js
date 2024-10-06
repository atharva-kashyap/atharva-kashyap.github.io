import './App.css';
import highQualityImage from './ask4.jpg'; // new JPG image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGraduationCap, faFile, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AnimatedText from './AnimatedText';
import { Block } from '@mui/icons-material';
import { useState } from 'react';
import CollapsibleSection from './CollapsibleSection';

function App() {
  const [isOther, setIsOther] = useState(0);

  const handleChange = (event, newValue) => {
    setIsOther(newValue);
  };

  const prl_content_without_expand = (
    <p>Previously, I was a research assistant at UW's <a href='https://personalrobotics.cs.washington.edu/' target="_blank">Personal Robotics Lab</a>, under the mentorship of Prof. <a href="https://goodrobot.ai/" target="_blank">Siddhartha Srinivasa</a>, PostDoc <a href="https://www.taylorkesslerfaulkner.com/" target="_blank">Taylor Kessler Faulkner</a>, and Ph.D. student <a href="https://amalnanavati.com/" target="_blank">Amal Nanavati</a>. I conducted Robot-Assisted Feeding research using the Assistive Dextrous Arm (ADA) robot. </p>
  )

  const prl_content = (
    <div>
      <p>As part of the system's week-long deployment at a user's home, it was crucial to have an accessible interface for the user to interact with the robot.</p>

      <p>I designed the overall state machine and implemented the first version of the app [<a href='https://github.com/personalrobotics/feeding_web_interface' target="_blank">GitHub</a>], which interspersed asking for user input (e.g., what bite users want) with displaying the current state of the robot (e.g., robot is attempting to acquire bite). Several of these components required running smaller user studies. For instance, we were unsure how users would prefer to specify which piece of food they want the robot to feed. Would they prefer to see a picture of the plate and click on their desired food, or would they rather have labels of the food items (e.g., “strawberry”, “salad”) to choose from? [<a href='https://drive.google.com/file/d/18S-5EefBi_lWHtQcQSPkr3Nc1qD13SbC/view?usp=sharing' target="_blank">Poster</a>, May 2023]</p>

      <p>In addition, the system required the user to manually confirm the presence of food on the fork, which can be cumbersome for some users. I worked to develop an automatic Food on Fork (FoF) algorithm to confirm the presence of food on the fork. [<a href='https://github.com/personalrobotics/ada_feeding' target="_blank">GitHub</a>]</p>
      <p>[<a href='https://dl.acm.org/doi/10.1145/3610978.3641085' target="_blank">HRI 2024 Demo Paper</a>] [In the News: <a href='https://www.geekwire.com/2023/uw-computer-science-research-event-offers-a-glimpse-of-the-future-at-the-dawn-of-ai/' target="_blank">GeekWire</a>, <a href='https://news.cs.washington.edu/2023/11/21/theres-so-much-great-research-here-the-case-for-open-language-models-and-other-food-for-thought-from-the-allen-schools-2023-research-showcase/' target="_blank">Allen School News</a>]</p>
    </div>
  );

  const ta_uw_content_without_expant = (
    <p>Outside of research, I have a strong passion for teaching and CS education. At UW, I served as a lead Teaching Assistant (TA) for the Allen School's Introductory Programming (CSE 12x) classes for 7+ quarters.</p>
  );

  const ta_uw_content = (
    <div>
      <p>More specifically, each quarter, I conducted 2-times weekly Quiz sections (co-taught with <a href='https://www.linkedin.com/in/poojitha-arangam/' target="_blank">Poojitha Arangam</a> during Au23, Wi24, and Sp24 quarters). Topics covered included data types, conditionals, methods, data structures (lists, dictionaries, sets, trees), object-oriented programming, recursion, and run-time analysis.</p>
      <p>In addition, I evaluated and provided constructive feedback on student work. I also authored several practice/quiz questions, created practice finals, wrote JUnit tests for autograding, and recorded walkthrough videos for several topics. As a lead TA, I also supported a team of 35+ TAs and the instructor by creating agendas and teaching resources to help teach section.</p>
      <p>Instructors TA-ed for: Prof. <a href='https://homes.cs.washington.edu/~mnats/bio.html' target="_blank">Miya Natsuhara</a>, Prof. Elba Garza, <a href='https://www.linkedin.com/in/joseph-spaniac-112644193/' target="_blank">Joe Spaniac</a>, and <a href='https://www.linkedin.com/in/melissalin13/' target="_blank">Melissa Lin</a>.</p>
    </div>
  );

  return (
    <div className="container">
      <div className="left-column">
        <h1 style={{ marginBottom: 0 }}><a className="iconAHref" href='/'>Atharva Kashyap</a></h1>
        <p style={{ marginTop: 0, marginBottom: 0 }}>ಅಥರ್ವ ಕಶ್ಯಪ್ / अथर्व कश्यप्</p>
        <p style={{ marginTop: 0 }}><strong>Pronouns:</strong> He/Him</p>
        {/* <Photo className='photo' /> */}
        <div className="clearfix">
          <img src={highQualityImage} alt="High Quality" className="photo" />
        </div>
        <div className='links-left'>
          <p><FontAwesomeIcon className="icon" icon={faEnvelope} size="lg" />&nbsp;&nbsp;&nbsp;Email: <a href='mailto:katharva@umich.edu'>katharva@umich.edu</a></p>
          <p><FontAwesomeIcon className="icon" icon={faGithub} size="lg" />&nbsp;&nbsp;&nbsp;GitHub: <a href='https://www.github.com/atharva-kashyap/' target="_blank">atharva-kashyap</a></p>
          <p><FontAwesomeIcon className="icon" icon={faGraduationCap} size="lg" />&nbsp;&nbsp;&nbsp;<a href='https://scholar.google.com/citations?user=JCoq_vAAAAAJ&hl=en' target="_blank">Google Scholar</a></p>
          <p><FontAwesomeIcon className="icon" icon={faLinkedin} size="lg" />&nbsp;&nbsp;&nbsp;LinkedIn: <a href='https://www.linkedin.com/in/atharva-kashyap/' target="_blank">in/atharva-kashyap</a></p>
          <p><FontAwesomeIcon className="icon" icon={faFile} size="lg" />&nbsp;&nbsp;&nbsp;<a href='https://drive.google.com/file/d/17x1r_ySEph4GeXJEb1oVfsbtvmCgOQIx/view?usp=sharing' target="_blank">1-page Resume</a> / <a href='https://drive.google.com/file/d/1DcwGQ3ZqPY8mVLpUefN-M7AWL-JTWcqF/view?usp=drive_link' target="_blank">CV</a></p>
          <p><i>Last Updated: October 2024</i></p>
          <p><small>made with <FontAwesomeIcon icon={faHeart} /> by Atharva</small></p>
        </div>
        <div className='links-right'>
          <p>Email: <a href='mailto:katharva@umich.edu'>katharva@umich.edu</a>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icon" icon={faEnvelope} size="lg" /></p>
          <p>GitHub: <a href='https://www.github.com/atharva-kashyap/' target="_blank">atharva-kashyap</a>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icon" icon={faGithub} size="lg" /></p>
          <p><a href='https://scholar.google.com/citations?user=JCoq_vAAAAAJ&hl=en' target="_blank">Google Scholar</a>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icon" icon={faGraduationCap} size="lg" /></p>
          <p>LinkedIn: <a href='https://www.linkedin.com/in/atharva-kashyap/' target="_blank">in/atharva-kashyap</a>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icon" icon={faLinkedin} size="lg" /></p>
          <p><a href='https://drive.google.com/file/d/17x1r_ySEph4GeXJEb1oVfsbtvmCgOQIx/view?usp=sharing' target="_blank">1-page Resume</a> / <a href='https://drive.google.com/file/d/1DcwGQ3ZqPY8mVLpUefN-M7AWL-JTWcqF/view?usp=drive_link' target="_blank">CV</a>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icon" icon={faFile} size="lg" /></p>
          <p><i>Last Updated: October 2024</i></p>
          <p><small>made with <FontAwesomeIcon icon={faHeart} /> by Atharva</small></p>
        </div>
      </div>

      <div className="right-column">
        <AnimatedText />
        <p>I am a first-year <strong>Robotics</strong> Ph.D student at the <a href='https://robotics.umich.edu/' target="_blank">University of Michigan</a>, advised by Prof. <a href='https://patricialvesoliveira.com/' target="_blank">Patricia Alves-Oliveira</a> and graciously supported by the Robotics Departmental Fellowship. My research interests broadly lie in Assistive Robotics and Human-Robot Interaction.</p>

        <p>I completed my bachelor's degree in <strong>Computer Science</strong> from the <a href="https://www.cs.washington.edu/" target="_blank">Paul G. Allen School of Computer Science & Engineering</a> at the <a href='http://www.washington.edu/' target="_blank">University of Washington</a> (UW), Seattle. I also minored in <strong>Applied Mathematics</strong> and <strong>Education, Learning & Societies</strong>.</p>

        <hr className="divider" />

        <Box sx={{ width: '100%' }} style={{ "padding-left": "0px" }}>
          <Tabs
            value={isOther}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab value={0} label="Research" style={{ "font-size": "18px", "font-family": "'Podkova', 'serif'", "font-weight": "700", "display": "inline", "textTransform": "none" }} />
            <Tab value={1} label="Teaching" style={{ "font-size": "18px", "font-family": "'Podkova', 'serif'", "font-weight": "700", "display": "inline", "textTransform": "none" }} />
            <Tab value={2} label="Miscellaneous" style={{ "font-size": "18px", "font-family": "'Podkova', 'serif'", "font-weight": "700", "display": "inline", "textTransform": "none" }} />
          </Tabs>
        </Box>
        {isOther === 0 ? (
          <div>
            <div>
              <h3>Robot Studio</h3>
              <p>Currently, I am a research assistant at UM's Robot Studio, under the mentorship of Prof. <a href="https://patricialvesoliveira.com/" target="_blank">Patricia Alves-Oliveira</a>. My research focuses broadly on Assistive Robotics for people with physical disabilities, with an emphasis on using LLMs to personalize these systems based on user's changing needs.</p>
            </div>
            <CollapsibleSection title="Personal Robotics Lab" content_without_expand={prl_content_without_expand} content={prl_content} />
          </div>
        ) : (isOther === 1 ? (
          <div>
            <CollapsibleSection title="TA for Intro Programming" content_without_expand={ta_uw_content_without_expant} content={ta_uw_content} />
          </div>
        ) : (<div>
          <div>
            <h3>Amazon Robotics Manipulation Project</h3>
            <p>During Summer 2022, I worked as a Software Development Engineering Intern on a Robotics project (at UW + Amazon Science Hub). I developed a web application to conduct evaluations. An evaluation entailed scanning and stowing Amazon products into bins and then allowing the robot to pick specified items from the bins. The web application served as a live interface (by displaying various bin metrics) for users to track the progress of the evaluation. [<a href='https://github.com/au-rmr/aurmr_inventory' target="_blank">GitHub</a>]</p>
          </div>
          <div>
            <h3>Arc Security</h3>
            <p>I served as the VP of Engineering for a local startup, Arc Security. I oversaw a team of 4 developers, managed timelines, and conducted user testing. We developed a product that consisted of mobile and web applications to foster real estate safety. The mobile app enabled agents to track their safety during on-site visits while the web app enabled managers to track agent safety. [<a href='https://github.com/arc-securitas/webapp' target="_blank">GitHub</a>]</p>
          </div>
          <div>
            <h3>Other</h3>
            <p>I served as the Technical Director of a UW organization, <a href='https://dubvelopersuw.org/' target="_blank">DUBvelopers</a>, where I supported in putting together Web Development workshops for 60+ beginners to acquire skills necessary to provide <i>pro bono</i> web development services to local small businesses.</p>

            <p>I volunteered as a dog walker at <a href='https://www.seattlehumane.org/' target="_blank">Seattle Humane</a> in Bellevue, WA. Previously, I have also helped with Dog/Puppy training classes. Prior to that, I was an Education volunteer supporting the Humane Teen Club (HTC) for school students to explore animal welfare topics. Even before that, I, myself, was a HTC member!</p>
          </div>
        </div>)
        )}
      </div>
    </div>
  );
}

export default App;
