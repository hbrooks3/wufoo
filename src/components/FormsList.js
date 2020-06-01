import React from "react";
import { Link } from "@reach/router";

// redux
import { useSelector, useDispatch } from "react-redux";
import { createForm } from "actions";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Remove hardcode later
const userId = "1234";

const FormCard = ({ title, formId }) => (
  <Card key={formId} style={{ width: "100%" }} className="mb-3">
    <Card.Body>
      <Card.Title>
        <Link to={`/${formId}`}>{title}</Link>
      </Card.Title>
    </Card.Body>
  </Card>
);

const FormsList = () => {
  const forms = useSelector((state) => state.forms);
  const dispatch = useDispatch();
  const handleClick = (userId) => () => {
    dispatch(createForm(userId));
  };

  return (
    <Container>
      <Row className="mt-2 mb-4">
        <h1>Form Manager</h1>
        <Button
          variant="outline-primary"
          onClick={handleClick(userId)}
          className="ml-auto"
          size="sm"
        >
          CREATE A NEW FORM
        </Button>
      </Row>
      <Row>{forms.map(FormCard)}</Row>
    </Container>
  );
};

export default FormsList;
