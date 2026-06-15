import './App.css';

// images
import highQualityImage from './ask5.jpg';
import sff2022 from './publication-images/sff-2022.jpg'
import hridemo2024 from './publication-images/hri-demo24.jpg'
import hri25feeding from './publication-images/hri25-feeding.png'
import chi2026 from './publication-images/chi2026.jpg'
import softwarex2026 from './publication-images/softwarex-2026.jpg'

// travel images
import bcnMediterranean from './travel-images/bcn-mediterranean.jpg'
import bcnMontserrat from './travel-images/bcn-montserrat.jpg'
import bcnSagrada from './travel-images/bcn-sagrada.jpg'
import lisbonBelem from './travel-images/lisbon-belem.jpg'
import lisbonNight from './travel-images/lisbon-night.jpg'
import lisbonTram from './travel-images/lisbon-tram.jpg'
import portoAtlantic from './travel-images/porto-atlantic.jpg'
import portoScenery from './travel-images/porto-scenery.jpg'

// dog images
import dog1 from './dogs/dog1.jpg'
import dog2 from './dogs/dog2.jpg'
import dog3 from './dogs/dog3.jpg'
import dog6 from './dogs/dog6.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGraduationCap, faFile, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AnimatedText from './AnimatedText';
import { Block } from '@mui/icons-material';
import { useState, useMemo, useEffect } from 'react';
import CollapsibleSection from './CollapsibleSection';

// Your GoatCounter subdomain code (the part before .goatcounter.com).
const GOATCOUNTER_CODE = "atharva-web";

function VisitorCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch(`https://${GOATCOUNTER_CODE}.goatcounter.com/counter/TOTAL.json`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => data && setCount(data.count_unique || data.count))
      .catch(() => {});
  }, []);

  if (!count) return null;
  return <p><small>{count} visitors</small></p>;
}

function App() {
  const [isOther, setIsOther] = useState(0);

  const handleChange = (event, newValue) => {
    setIsOther(newValue);
  };

  // Underline "A. Kashyap" / "A Kashyap" / "AS Kashyap" / "A. S. Kashyap", etc.
  const kashyapPattern = /([A-Z](?:\.?\s?[A-Z])*\.?\s+Kashyap)/g;
  const highlightAuthor = (authors) =>
    authors.split(kashyapPattern).map((part, i) =>
      new RegExp(`^${kashyapPattern.source}$`).test(part) ? <u key={i}>{part}</u> : part
    );

  // TODO: replace these placeholder publications + thumbnails with real ones.
  // paper / video / website / award are all optional — only the ones you set will show.
  // e.g. add  award: "Best Paper Award"  to an entry to show an award badge.
  const publications = [
    {
      title: "Speak2Scene: Voice-based Storyboarding",
      authors: "AS Kashyap, P Alves-Oliveira",
      venue: "SoftwareX, 34, 102628",
      year: 2026,
      image: softwarex2026,
      paper: "https://doi.org/10.1016/j.softx.2026.102628",
      video: "https://youtu.be/tfez8F_uL9E?si=7516rRB4kgOBzrtv",
      website: "https://github.com/studiorobot/Speak2Scene/tree/v2-softwarex"
    },
    {
      title: "Robot-Assisted Social Dining as a White Glove Service",
      authors: "AS Kashyap, UA Morkute, P Alves-Oliveira",
      venue: "Conference on Human Factors in Computing Systems (CHI)",
      year: 2026,
      image: chi2026,
      paper: "https://dl.acm.org/doi/full/10.1145/3772318.3790481",
      video: "https://www.youtube.com/watch?v=JKJiZffJZ6Q",
    },
    {
      title: "Lessons learned from designing and evaluating a robot-assisted feeding system for out-of-lab use",
      authors: "A Nanavati, EK Gordon, TAK Faulkner, YR Song, J Ko, T Schrenk, V Nguyen, BH Zhu, H Bolotski, A Kashyap, S Kutty, R Karim, L Rainbolt, R Scalise, H Song, R Qu, M Cakmak, SS Srinivasa",
      venue: "ACM/IEEE International Conference on Human-Robot Interaction (HRI)",
      year: 2025,
      image: hri25feeding,
      paper: "https://ieeexplore.ieee.org/document/10974182",
      website: "https://robotfeeding.io/publications/hri25a/",
      award: "Best Systems Paper Award Finalist",
    },
    {
      title: "An adaptable, safe, and portable robot-assisted feeding system",
      authors: "EK Gordon, RK Jenamani, A Nanavati, Z Liu, D Stabile, X Dai, T Bhattacharjee, T Schrenk, J Ko, H Bolotski, R Karim, A Kashyap, BH Zhu, TK Faulkner, SS Srinivasa",
      venue: "ACM/IEEE International Conference on Human-Robot Interaction (HRI), Demo",
      year: 2024,
      image: hridemo2024,
      paper: "https://doi.org/10.1145/3610978.3641085",
      award: "Best Demo Award",
    },
    {
      title: "Vibration Reduction Using Material Jetted Parts for Sander Grips",
      authors: "S Kandukuri, A Kashyap, J Lipton",
      venue: "Solid Freeform Fabrication",
      year: 2022,
      image: sff2022,
      paper: "https://utw10945.utweb.utexas.edu/sites/default/files/2022/Vibration%20Reduction%20Using%20Material%20Jetted%20Parts%20fo.pdf",
    },
  ];

  const publications_content = (
    <div className="publications">
      {publications.map((pub, i) => (
        <div className="publication" key={i}>
          <img className="publication-thumb" src={pub.image} alt={pub.title} />
          <div className="publication-info">
            <p className="publication-title">{pub.title}</p>
            <p className="publication-meta">{highlightAuthor(pub.authors)}</p>
            <p className="publication-meta"><i>{pub.venue}</i>, {pub.year}</p>
            <p className="publication-links">
              {pub.paper && <a href={pub.paper} target="_blank" rel="noreferrer">Paper</a>}
              {pub.video && <a href={pub.video} target="_blank" rel="noreferrer">Video</a>}
              {pub.website && <a href={pub.website} target="_blank" rel="noreferrer">Website</a>}
              {pub.award && <span className="publication-award">{pub.award}</span>}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  // TODO: confirm/replace these press articles.
  const press = [
    {
      outlet: "UW News",
      title: "Assistive feeding robot gets tested outside the lab",
      year: 2025,
      link: "https://www.washington.edu/news/2025/03/04/assistive-feeding-robot-gets-tested-outside-the-lab/",
    },
    {
      outlet: "GeekWire",
      title: "UW computer science research event offers a glimpse of the future at the dawn of AI",
      year: 2023,
      link: "https://www.geekwire.com/2023/uw-computer-science-research-event-offers-a-glimpse-of-the-future-at-the-dawn-of-ai/",
    },
    {
      outlet: "Allen School News",
      title: "“There's so much great research here”: the case for open language models and other food for thought from the Allen School's 2023 Research Showcase",
      year: 2023,
      link: "https://news.cs.washington.edu/2023/11/21/theres-so-much-great-research-here-the-case-for-open-language-models-and-other-food-for-thought-from-the-allen-schools-2023-research-showcase/",
    },
  ];

  const press_content = (
    <ul className="press">
      {press.map((item, i) => (
        <li className="press-item" key={i}>
          <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
          <span className="press-meta"> — {item.outlet}, {item.year}</span>
        </li>
      ))}
    </ul>
  );

  const travel_images = [
    { src: bcnMontserrat, alt: "Montserrat, Barcelona" },
    { src: bcnSagrada, alt: "Sagrada Família, Barcelona" },
    { src: bcnMediterranean, alt: "Mediterranean coast, Barcelona" },
    { src: lisbonTram, alt: "Lisbon" },
    { src: lisbonBelem, alt: "Belém Tower, Lisbon" },
    { src: lisbonNight, alt: "Lisbon at night" },
    { src: portoScenery, alt: "Porto" },
    { src: portoAtlantic, alt: "Atlantic coast, Porto" },
  ];

  // Shuffle once per page load so the collage rearranges on each refresh.
  const shuffled_travel_images = useMemo(() => {
    const arr = [...travel_images];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dog_images = [
    { src: dog6, alt: "A dog I walked" },
    { src: dog1, alt: "A dog I walked" },
    { src: dog2, alt: "A dog I walked" },
    { src: dog3, alt: "A dog I walked" },
  ];

  const dogs_content = (
    <div className="travel-collage">
      {dog_images.map((img, i) => (
        <figure className="travel-item" key={i}>
          <img className="travel-photo" src={img.src} alt={img.alt} />
        </figure>
      ))}
    </div>
  );

  const travel_content = (
    <div className="travel-collage">
      {shuffled_travel_images.map((img, i) => (
        <figure className="travel-item" key={img.alt}>
          <img className="travel-photo" src={img.src} alt={img.alt} />
          <figcaption className="travel-caption">{img.alt}</figcaption>
        </figure>
      ))}
    </div>
  );

  const prl_content_without_expand = (
    <p>Previously, I was a research assistant at UW's <a href='https://personalrobotics.cs.washington.edu/' target="_blank">Personal Robotics Lab</a>, under the mentorship of Prof. <a href="https://goodrobot.ai/" target="_blank">Siddhartha Srinivasa</a>, Dr. <a href="https://www.taylorkesslerfaulkner.com/" target="_blank">Taylor Kessler Faulkner</a>, and Dr. <a href="https://amalnanavati.com/" target="_blank">Amal Nanavati</a>. I conducted Robot-Assisted Feeding research using the Assistive Dextrous Arm (ADA) robot. </p>
  )

  const prl_content = (
    <div>
      <p>As part of the system's week-long deployment at a user's home, it was crucial to have an accessible interface for the user to interact with the robot.</p>

      <p>I designed the overall state machine and implemented the first version of the app [<a href='https://github.com/personalrobotics/feeding_web_interface' target="_blank">GitHub</a>], which interspersed asking for user input (e.g., what bite users want) with displaying the current state of the robot (e.g., robot is attempting to acquire bite). Several of these components required running smaller user studies. For instance, we were unsure how users would prefer to specify which piece of food they want the robot to feed. Would they prefer to see a picture of the plate and click on their desired food, or would they rather have labels of the food items (e.g., “strawberry”, “salad”) to choose from? [<a href='https://drive.google.com/file/d/18S-5EefBi_lWHtQcQSPkr3Nc1qD13SbC/view?usp=sharing' target="_blank">Poster</a>, May 2023]</p>

      <p>In addition, the system required the user to manually confirm the presence of food on the fork, which can be cumbersome for some users. I worked to develop an automatic Food on Fork (FoF) algorithm to confirm the presence of food on the fork. [<a href='https://github.com/personalrobotics/ada_feeding' target="_blank">GitHub</a>]</p>
      <p>[<a href='https://personalrobotics.cs.washington.edu/publications/nanavati2025lessons.pdf' target="_blank">HRI 2025 Paper</a>, <a href='https://robotfeeding.io/publications/hri25a/' target="_blank">Website</a>] [<a href='https://dl.acm.org/doi/10.1145/3610978.3641085' target="_blank">HRI 2024 Demo Paper</a>] [In the News: <a href='https://www.washington.edu/news/2025/03/04/assistive-feeding-robot-gets-tested-outside-the-lab/' target='_blank'>UW News</a>, <a href='https://www.geekwire.com/2023/uw-computer-science-research-event-offers-a-glimpse-of-the-future-at-the-dawn-of-ai/' target="_blank">GeekWire</a>, <a href='https://news.cs.washington.edu/2023/11/21/theres-so-much-great-research-here-the-case-for-open-language-models-and-other-food-for-thought-from-the-allen-schools-2023-research-showcase/' target="_blank">Allen School News</a>]</p>
    </div>
  );

  const ta_uw_content_without_expant = (
    <p>I have a strong passion for teaching and CS education. At UW, I served as a lead Teaching Assistant (TA) for the Allen School's Introductory Programming (CSE 12x) classes for 7+ quarters.</p>
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
          <div className='links-left-icons'>
            <p><a href='mailto:katharva@umich.edu'><FontAwesomeIcon className="icon" icon={faEnvelope} size="lg" /></a></p>
            <p><a href='https://www.github.com/atharva-kashyap/' target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} size="lg" /></a></p>
            <p><a href='https://scholar.google.com/citations?user=JCoq_vAAAAAJ&hl=en' target="_blank"><FontAwesomeIcon className="icon" icon={faGraduationCap} size="lg" /></a></p>
            <p><a href='https://www.linkedin.com/in/atharva-kashyap/' target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedin} size="lg" /></a></p>
            <p><a href='/CV' target="_blank"><FontAwesomeIcon className="icon" icon={faFile} size="lg" /></a></p>
          </div>
          <p><i>Last Updated: June 2026</i></p>
          <p><small>made with <FontAwesomeIcon icon={faHeart} /> by Atharva</small></p>
          <VisitorCount />
        </div>
        <div className='links-right'>
          <div className='links-right-icons'>
            <p><a href='mailto:katharva@umich.edu'><FontAwesomeIcon className="icon" icon={faEnvelope} size="lg" /></a></p>
            <p><a href='https://www.github.com/atharva-kashyap/' target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} size="lg" /></a></p>
            <p><a href='https://scholar.google.com/citations?user=JCoq_vAAAAAJ&hl=en' target="_blank"><FontAwesomeIcon className="icon" icon={faGraduationCap} size="lg" /></a></p>
            <p><a href='https://www.linkedin.com/in/atharva-kashyap/' target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedin} size="lg" /></a></p>
            <p><a href='/CV' target="_blank"><FontAwesomeIcon className="icon" icon={faFile} size="lg" /></a></p>
          </div>
          <p><i>Last Updated: June 2026</i></p>
          <p><small>made with <FontAwesomeIcon icon={faHeart} /> by Atharva</small></p>
          <VisitorCount />
        </div>
      </div>

      <div className="right-column">
        {/* <AnimatedText /> */}
        {/* <hr className="divider" /> */}

        <Box sx={{ width: '100%' }} style={{ "padding-left": "0px" }}>
          <Tabs
            value={isOther}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="secondary tabs example"
          >
            <Tab value={0} label="About" style={{ "font-size": "18px", "font-family": "'Podkova', 'serif'", "font-weight": "700", "display": "inline", "textTransform": "none" }} />
            <Tab value={1} label="Research" style={{ "font-size": "18px", "font-family": "'Podkova', 'serif'", "font-weight": "700", "display": "inline", "textTransform": "none" }} />
            <Tab value={2} label="Teaching" style={{ "font-size": "18px", "font-family": "'Podkova', 'serif'", "font-weight": "700", "display": "inline", "textTransform": "none" }} />
            <Tab value={3} label="Professional" style={{ "font-size": "18px", "font-family": "'Podkova', 'serif'", "font-weight": "700", "display": "inline", "textTransform": "none" }} />
            <Tab value={4} label="Other" style={{ "font-size": "18px", "font-family": "'Podkova', 'serif'", "font-weight": "700", "display": "inline", "textTransform": "none" }} />
          </Tabs>
        </Box>
        {isOther === 0 ? (
          <div>
            <p>I am a <strong>Robotics</strong> PhD candidate at the <a href='https://robotics.umich.edu/' target="_blank">University of Michigan</a> advised by Dr. <a href='https://patricialvesoliveira.com/' target="_blank">Patrícia Alves-Oliveira</a>. My current research focus is in the intersection of human-robot interaction, artificial intelligence, and healthcare.</p>

            <p>My research leverages both qualitative and statistical methods. My recent work includes human-centered AI evaluation, healthcare datasets, experimental design, and the development of benchmark frameworks for assessing AI behavior, especially in the context of pluralistic perspectives on disabilities.</p>

            <p>Prior to my PhD, I earned my bachelor's degree in <strong>Computer Science</strong> from the <a href="https://www.cs.washington.edu/" target="_blank">Paul G. Allen School of Computer Science & Engineering</a> at the <a href='http://www.washington.edu/' target="_blank">University of Washington</a>. I also minored in <strong>Applied Mathematics</strong> and <strong>Education, Learning & Societies</strong>. There, I conducted research with Dr. <a href='https://goodrobot.ai/' target="_blank">Siddhartha Srinivasa</a> on a <a href='https://robotfeeding.io/' target="_blank">robot-assisted feeding</a> project. I did software development with Dr. <a href='https://www.mayacakmak.io/home' target="_blank">Maya Cakmak</a> on a <a href='https://robotic-manipulation.sciencehub.uw.edu/' target="_blank">manipulation project</a> in collaboration with Amazon Robotics.</p>

            <h3>Press</h3>
            {press_content}
          </div>
        ) : (isOther === 1 ? (
          <div>
            <h3>Publications</h3>
            {publications_content}
            {/* <div>
              <h3>Robot Studio</h3>
              <p>Currently, I am a research assistant at the <a href='https://www.robotdesign.studio/' target="_blank">Robot Studio</a> Lab. I <b>design</b> interactions between humans and assistive robots and I <b>implement</b> robot systems that enable personalization.</p>
            </div>
            <CollapsibleSection title="Personal Robotics Lab" content_without_expand={prl_content_without_expand} content={prl_content} /> */}
          </div>
        ) : (isOther === 2 ? (
          <div>
            <CollapsibleSection title="Teaching Assistant for Intro Programming" content_without_expand={ta_uw_content_without_expant} content={ta_uw_content} />
          </div>
        ) : (isOther === 3 ? (
          <div>
            <div>
              <h3>Amazon Robotics Manipulation Project</h3>
              <p>During Summer 2022, I worked as a Software Development Engineering Intern on a <a href='https://robotic-manipulation.sciencehub.uw.edu/' target="_blank">robotics manipulation project</a> (at UW + Amazon Science Hub). I developed a web application to conduct evaluations. An evaluation entailed scanning and stowing Amazon products into bins and then allowing the robot to pick specified items from the bins. The web application served as a live interface (by displaying various bin metrics) for users to track the progress of the evaluation. [<a href='https://github.com/au-rmr/aurmr_inventory' target="_blank">GitHub</a>]</p>
            </div>
            <div>
              <h3>Arc Security</h3>
              <p>I served as the VP of Engineering for a local startup (now, defunct), <a href='https://dubvelopersuw.org/' target="_blank">Arc Security</a>. I oversaw a team of 4 developers, managed timelines, and conducted user testing. We developed a product that consisted of mobile and web applications to foster real estate safety. The mobile app enabled agents to track their safety during on-site visits while the web app enabled managers to track agent safety. [<a href='https://github.com/arc-securitas/webapp' target="_blank">GitHub</a>]</p>
            </div>
          </div>
        ) : (
          <div>
            <h3>Web Dev Mentor</h3>
            <p>I served as the Technical Director of a UW organization, <a href='https://www.instagram.com/webimpactuw/' target="_blank">DUBvelopers</a> (now, WebImpact), where I supported in putting together Web Development workshops for 60+ beginners to acquire skills necessary to provide <i>pro bono</i> web development services to local small businesses.</p>

            <h3>Random...</h3>
            <p>I love dogs! I walk dogs at <a href='https://www.hshv.org/' target="_blank">HSHV</a> (previously, at <a href='https://detroitdogrescue.com/' target="_blank">DDR</a> and <a href='https://www.seattlehumane.org/' target="_blank">SH</a>). I have also helped with dog training classes, been an education volunteer supporting the Humane Teen Club (HTC) to explore animal welfare topics. Before that, I, myself, was a HTC member!</p>
            {dogs_content}

            <p>I enjoy travelling, taking pictures, and exploring new places.</p>
            {travel_content}
          </div>
        ))))}
      </div>
    </div>
  );
}

export default App;
