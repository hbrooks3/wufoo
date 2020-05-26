import React, { useState } from "react";
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

const EditPane = ({ tab, setTab }) => (
  <Col>
    <Tabs activeKey={tab} onSelect={(k) => setTab(k)}>
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

const PreviewPane = ({ form, setTab }) => {
  return (
    <Col>
      <div onClick={() => setTab("editForm")}>
        <h1>{form.title}</h1>
        <p>{form.desc}</p>
      </div>
    </Col>
  );
};

const FormView = ({ formId }) => {
  const form = useSelector(selectForm(formId));
  const [tab, setTab] = useState("addField");

  if (!form) {
    return <Redirect noThrow to="/" />;
  }

  return (
    <Container fluid>
      <Row>
        <EditPane tab={tab} setTab={setTab} />
        <PreviewPane form={form} setTab={setTab} />
      </Row>
    </Container>
  );
};

export default FormView;
