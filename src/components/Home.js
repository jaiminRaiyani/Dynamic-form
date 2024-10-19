import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="text-center my-5">
      <h1>Welcome to the Dynamic Form App</h1>
      <p>
        This application allows you to dynamically add, remove, and submit form
        fields.
      </p>
      <Link to="/form">
        <Button variant="primary">Go to Dynamic Form</Button>
      </Link>
    </Container>
  );
};

export default Home;
