import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>SOFT SKILLS</h2>

              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Communication skill level" />
                  <h5>Communication</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Problem solving skill level" />
                  <h5>Problem-solving</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Time management skill level" />
                  <h5>Time management</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Creativity skill level" />
                  <h5>Creativity</h5>
                </div>
              </Carousel>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};