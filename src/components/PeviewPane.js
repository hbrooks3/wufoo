import React from "react";

//redux
import { useSelector } from "react-redux";
import { selectField } from "selectors";

// layout
import Col from "react-bootstrap/Col";

// forms
import Form from "react-bootstrap/Form";

const FieldPreview = ({ fieldId, setTab, setFieldIndex }) => {
  const field = useSelector(selectField(fieldId));

  if (!field) {
    return null;
  }

  const { label, inputType } = field;
  const editField = () => {
    setTab("editField");
    setFieldIndex();
  };

  return (
    <Form.Group onClick={editField}>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="input" />
    </Form.Group>
  );
};

const PreviewPane = ({ form, setTab, setFieldIndex }) => {
  const { title, desc, fields } = form;
  return (
    <Col>
      <div onClick={setTab.bind(null, "editForm")}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      {fields.map((fieldId, index) => (
        <FieldPreview
          key={index}
          fieldId={fieldId}
          setTab={setTab}
          setFieldIndex={setFieldIndex.bind(null, index)}
        />
      ))}
    </Col>
  );
};

export default PreviewPane;
