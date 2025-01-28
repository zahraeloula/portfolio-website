import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import myPhoto from '../assets/img/my-photo.jpg';
import { HiDownload } from "react-icons/hi";
import cvFile from '../assets/img/cv zahra eloula bouaffoura.pdf';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineering student" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Zahra el oula Bouafoura`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineering student" ]'><span className="wrap">{text}</span></span></h1>
                  <p>👋 Hello, I’m Zahra El Oula Bouafoura! I’m a dedicated software engineering student with a strong passion for Full Stack Development, DevOps, and Data Science.
                🎓 Currently, I am seeking a final-year project to complete my academic journey and apply my technical knowledge in practical, impactful ways.
💡 My key areas of expertise include:
.Full Stack Development (Frontend & Backend)
.DevOps practices and principles
.Data Science
.Project management and technical problem-solving.</p>

<button
  className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:ring-4 focus:ring-blue-300 hover:scale-110 active:scale-105 transition cursor-pointer"
  onClick={() => {
    const link = document.createElement('a');
    link.href = cvFile; // Utilise le chemin importé
    link.download = 'cv_zahra_eloula_bouaffoura.pdf'; // Nom du fichier pour le téléchargement
    link.click();
  }}
>
  Download CV{" "}
  <ArrowRightCircle size={25} />
</button>


                 
  
              </div>}

              
            </TrackVisibility>
          </Col>
        

<Col xs={12} md={6} xl={5}>
  <TrackVisibility>
    {({ isVisible }) =>
      <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
        <img src={myPhoto} alt="My Personal Photo" className="my-custom-img" />
      </div>}
  </TrackVisibility>
</Col>

        </Row>
      </Container>
    </section>
  )
}
