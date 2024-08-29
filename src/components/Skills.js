import { Container, Row , Col} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { ReactComponent as HtmlIcon} from "../assets/img/html.svg";
import { ReactComponent as CssIcon} from "../assets/img/css.svg";
import { ReactComponent as BootstrapIcon} from "../assets/img/bootstrap.svg";
import { ReactComponent as JavaIcon} from "../assets/img/java.svg";
import { ReactComponent as JavascriptIcon} from "../assets/img/javascript.svg";
import { ReactComponent as NextjsIcon} from "../assets/img/nextjs.svg";
import { ReactComponent as NodejsIcon} from "../assets/img/nodejs.svg";
import { ReactComponent as PostIcon} from "../assets/img/postgresql.svg";
import { ReactComponent as PythonIcon} from "../assets/img/python.svg";
import { ReactComponent as ReactIcon} from "../assets/img/react.svg";
import { ReactComponent as TailIcon} from "../assets/img/tailwindcss.svg";
import { ReactComponent as TypeIcon} from "../assets/img/typescript.svg";
import { ReactComponent as UnityIcon} from "../assets/img/unity.svg";
import { ReactComponent as VscodeIcon} from "../assets/img/vs-code.svg";


export const Skills= () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>Describe your skills here</p>
                <div className="skills-grid">
                  <div className="item"> <HtmlIcon/> </div>
                  <div className="item"><CssIcon /></div>
                  <div className="item"><JavascriptIcon /></div>
                  <div className="item"><ReactIcon /></div>
                  <div className="item"><NextjsIcon /></div>
                  <div className="item"><NodejsIcon /></div>
                  <div className="item"><TailIcon /></div>
                  <div className="item"><TypeIcon /></div>
                  <div className="item"><BootstrapIcon /></div>
                  <div className="item"><JavaIcon /></div>
                  <div className="item"><PythonIcon /></div>
                  <div className="item"><PostIcon /></div>
                  <div className="item"><UnityIcon /></div>
                  <div className="item"><VscodeIcon /></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )

}







