import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import Spline from '@splinetool/react-spline';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [" I am Software Engineer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100); // how fast one word comes after another one
  const period = 2000; // time passed out between letters

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

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
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false); // Switch to typing mode
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome To Mai Portfolio</span>
            <h1>{`Hi I'm Huong `}</h1>
            <h1><span className="wrap">{text}</span></h1>

            <p> laallallallala</p>
            <button onClick={() => console.log('connect')}> Let's Connect <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}  className="spline-container">
          <Spline scene="https://prod.spline.design/Co8Y92So6OMdyjLn/scene.splinecode" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
