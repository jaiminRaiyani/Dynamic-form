import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <Container className="home-container text-center">
      <div className="home-content">
        <h1 className="home-title">Welcome to the Dynamic Form App</h1>
        <p className="home-description">
          Easily create, add, and remove dynamic form fields to submit custom
          data.
        </p>
        <Link to="/form">
          <Button variant="primary" className="home-button">
            Get Started
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
