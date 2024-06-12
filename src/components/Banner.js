import { Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () =>{
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome To Mai Portfolio</span>
                        <h1>{`Hi I'm Huong`}<span className="wrap">web developer</span></h1>
                        <p> laallallallala</p>
                        <button onClick={()=> console.log('connect')}> Let's Connect </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>

                    </Col>
                </Row>

            </Container>

        </section>
    )
}