import React from 'react';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <Container fluid className="landing-container">
      <Row className="text-center header-section">
        <Col>
          <h1>Prepare for Success</h1>
          <h2>OET for Healthcare Professionals</h2>
          <p className="header-description">
            Achieve your goals with our comprehensive OET preparation course.
          </p>
          <Button variant="primary" size="lg" className="cta-button" onClick={() => alert('Enrolled!')}>
            Enroll Now
          </Button>
        </Col>
      </Row>

      <Row className="my-5 features-section text-center">
        <Col>
          <h2>Why Choose Our Course?</h2>
          <Row>
            <Col md={6} lg={3}>
              <div className="feature-card">
                <h3>Expert Instruction</h3>
                <p>Learn from experienced healthcare professionals.</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="feature-card">
                <h3>Comprehensive Resources</h3>
                <p>Access practice tests and study materials.</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="feature-card">
                <h3>Flexible Learning</h3>
                <p>Study at your own pace with our online platform.</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="feature-card">
                <h3>Personalized Support</h3>
                <p>Receive feedback from dedicated instructors.</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="my-5 structure-section text-center">
        <Col>
          <h2>Course Structure</h2>
          <div className="timeline">
            <div>Module 1: Introduction to OET</div>
            <div>Module 2: Language Skills</div>
            <div>Module 3: Practice Tests</div>
            <div>Module 4: Mock Exams</div>
          </div>
        </Col>
      </Row>

      <Row className="my-5 testimonials-section">
        <Col>
          <h2>What Our Students Say</h2>
          <div className="testimonial">"This course transformed my preparation!" - Jane D.</div>
          <div className="testimonial">"The support from instructors was invaluable." - John S.</div>
        </Col>
      </Row>

      <Row className="my-5">
        <Col>
          <h2>Frequently Asked Questions</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is the duration of the course?</Accordion.Header>
              <Accordion.Body>
                8 weeks, with flexible online learning options.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How is the course delivered?</Accordion.Header>
              <Accordion.Body>
                Online through our learning management system.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What materials will I receive?</Accordion.Header>
              <Accordion.Body>
                All course materials including guides, tests, and resources.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <Row className="text-center footer-section">
        <Col>
          <p>&copy; 2024 Pro Medical English. All rights reserved.</p>
          <p>Contact us: info@promedicalenglish.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
