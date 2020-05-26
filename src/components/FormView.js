import React from "react";
import { Redirect } from "@reach/router";

//redux
import { useSelector } from "react-redux";
import { selectForm } from "selectors";

// layout
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// tabs
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const EditPane = () => (
  <Col>
    <Tabs>
      <Tab eventKey="addField" title="Add a Field">
        Add fields
      </Tab>
      <Tab eventKey="editField" title="Field Settings">
        Edit field
      </Tab>
      <Tab eventKey="editForm" title="Form Settings">
        Form Settings
      </Tab>
    </Tabs>
  </Col>
);

const Preview = ({ form }) => {
  return (
    <Col>
      <h1>{form.title}</h1>
      <p>{form.desc}</p>
    </Col>
  );
};

const FormView = ({ formId }) => {
  const form = useSelector(selectForm(formId));
  if (!form) {
    return <Redirect noThrow to="/" />;
  }
  return (
    <Container fluid>
      <Row>
        <EditPane />
        <Preview form={form} />
      </Row>
    </Container>
  );
};

export default FormView;
