import { Container, Row , Col} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { ReactComponent as HtmlIcon} from "../assets/img/html.svg";
import { ReactComponent as HtmlIcon} from "../assets/img/html.svg";


export const Skills= () => {

    return (
        <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>Describe your skills here</p>
                <div className="skills-grid">
                  <div className="item">
                        <HtmlIcon/>
                  </div>
                 
                  {/* Add more icons as needed */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )

}







