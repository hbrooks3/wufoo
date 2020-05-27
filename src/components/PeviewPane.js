import React from "react";

//redux
import { useSelector } from "react-redux";
import { selectField } from "selectors";

// forms
import Form from "react-bootstrap/Form";

const CustomInput = ({ inputType }) => {
  switch (inputType) {
    case "textarea":
      return <Form.Control as="textarea" />;
    case "select":
      return <Form.Control as="select" />;
    default:
      return <Form.Control as="input" type={inputType} />;
  }
};

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
      <CustomInput inputType={inputType} />
    </Form.Group>
  );
};

const PreviewPane = ({ form, setTab, setFieldIndex }) => {
  const { title, desc, fields } = form;
  return (
    <>
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
    </>
  );
};

export default PreviewPane;
