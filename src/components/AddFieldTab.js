import React from "react";

// redux
import { useDispatch } from "react-redux";
import { createField } from "actions";

// bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// data
import { fieldTypes } from "data/constants";

const ButtonCol = ({ type, display, handleClick }) => (
  <Col className="my-3">
    <Button block size="spaced" onClick={handleClick(type)}>
      {display}
    </Button>
  </Col>
);

const AddFieldTab = ({ formId }) => {
  const dispatch = useDispatch();
  const handleClick = (inputType) => () => {
    dispatch(createField(formId, inputType));
  };

  return (
    <Container>
      <Row xs="1" sm="1" md="2" lg="2" xl="3">
        {fieldTypes.map((field, i) => (
          <ButtonCol key={i} {...field} handleClick={handleClick} />
        ))}
      </Row>
    </Container>
  );
};

export default AddFieldTab;
