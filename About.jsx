import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


export const About = () => {
  return (
    <div className="about-page">
      <Container>
        <h2 className="about-title">About MoviesHub</h2>
        <p className="about-subtitle">
          Your ultimate destination for movies, trailers, and entertainment 🎬
        </p>

        <Row className="mt-4">
          <Col md={6}>
            <Card className="about-card">
              <Card.Body>
                <Card.Title>🎥 Who We Are</Card.Title>
                <Card.Text>
                  MoviesHub is a movie discovery platform built using React.
                  It allows users to explore popular, trending, and upcoming
                  movies with detailed information.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="about-card">
              <Card.Body>
                <Card.Title>🚀 Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to provide movie lovers with an easy and
                  enjoyable way to discover films and TV shows using modern web
                  technologies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={4}>
            <Card className="about-card">
              <Card.Body>
                <Card.Title>⚛ React</Card.Title>
                <Card.Text>
                  Built with React using reusable components and hooks for fast
                  performance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="about-card">
              <Card.Body>
                <Card.Title>🎬 Movie API</Card.Title>
                <Card.Text>
                  Integrated with movie APIs to fetch real-time movie data and
                  posters.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="about-card">
              <Card.Body>
                <Card.Title>📱 Responsive</Card.Title>
                <Card.Text>
                  Fully responsive design using Bootstrap for all devices.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
