import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";

const DynamicForm = () => {
  const [inputs, setInputs] = useState([{ value: "" }]);
  const [submittedValues, setSubmittedValues] = useState([]);

  const handleChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { value: "" }]);
  };

  const handleRemoveInput = (index) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValues(inputs);
    setInputs([{ value: "" }]);
  };

  return (
    <Container className="form-container mt-5">
      <h2 className="text-center my-4">Dynamic Form</h2>
      <Form onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <Row key={index} className="mb-3">
            <Col sm={9}>
              <Form.Control
                type="text"
                value={input.value}
                onChange={(event) => handleChange(index, event)}
                placeholder={`Input ${index + 1}`}
                required
              />
            </Col>
            <Col sm={3}>
              <Button variant="danger" onClick={() => handleRemoveInput(index)}>
                Remove
              </Button>
            </Col>
          </Row>
        ))}
        <Button variant="primary" onClick={handleAddInput} className="mr-2">
          Add Input
        </Button>
        <Button type="submit" variant="success" className="ml-2">
          Submit
        </Button>
      </Form>

      {submittedValues.length > 0 && (
        <div className="mt-5">
          <h3>Submitted Values:</h3>
          <ListGroup>
            {submittedValues.map((input, index) => (
              <ListGroup.Item key={index}>{input.value}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </Container>
  );
};

export default DynamicForm;
