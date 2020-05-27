import React, { useState } from "react";
import { Redirect } from "@reach/router";

//redux
import { useSelector } from "react-redux";
import { selectForm } from "selectors";

// layout
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// components
import PreviewPane from "components/PeviewPane";
import EditPane from "components/EditPane";

const FormView = ({ formId, createField, updateField }) => {
  const form = useSelector(selectForm(formId));
  const [tab, setTab] = useState("addField");
  const [fieldIndex, setFieldIndex] = useState(0);

  if (!form) {
    return <Redirect noThrow to="/" />;
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <EditPane
            tab={tab}
            setTab={setTab}
            fieldIndex={fieldIndex}
            form={form}
            updateField={updateField}
            createField={createField}
          />
        </Col>
        <Col>
          <PreviewPane
            form={form}
            setTab={setTab}
            setFieldIndex={setFieldIndex}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FormView;
