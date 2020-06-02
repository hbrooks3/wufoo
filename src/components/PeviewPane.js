import React from "react";

//redux
import { useSelector } from "react-redux";
import { selectField } from "selectors";

// forms
import Form from "react-bootstrap/Form";

const CustomInput = ({ inputType, size }) => {
  switch (inputType) {
    case "text":
      return <Form.Control type="text" size={size} />;
    case "number":
      return <Form.Control type="number" size={size} />;
    case "textarea":
      return <Form.Control as="textarea" size={size} />;
    default:
      return (
        <Form.Control
          type="text"
          size={size}
          placeholder={`${inputType} not yet supported :(`}
        />
      );
  }
};

const FieldPreview = ({ fieldId, setTab, setFieldIndex, selected }) => {
  const field = useSelector(selectField(fieldId));

  if (!field) {
    return null;
  }

  const { label, instructions } = field;
  const editField = () => {
    setTab("editField");
    setFieldIndex();
  };

  return (
    <Form.Group
      onClick={editField}
      // className={selected && "border border-primary"}
    >
      <Form.Label>{label}</Form.Label>
      <CustomInput {...field} />
      <Form.Text>{instructions}</Form.Text>
    </Form.Group>
  );
};

const PreviewPane = ({ form, setTab, setFieldIndex, fieldIndex }) => {
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
          selected={fieldIndex === index}
        />
      ))}
    </>
  );
};

export default PreviewPane;
