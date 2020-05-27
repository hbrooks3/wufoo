import React from "react";

//redux
import { useSelector } from "react-redux";
import { selectField } from "selectors";

// layout
import Col from "react-bootstrap/Col";

// tabs
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditField = ({ fieldId, updateField }) => {
  const field = useSelector(selectField(fieldId));
  const { label } = field;
  const handleChange = (event) => {
    const changed = event.target.name;
    const change = event.target.value;
    updateField({ ...field, [changed]: change });
  };
  return (
    <Form>
      <Form.Group>
        <Form.Label>Field Label</Form.Label>
        <Form.Control
          as="textarea"
          name="label"
          value={label}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};

const EditPane = ({
  tab,
  setTab,
  fieldIndex,
  form,
  createField,
  updateField,
}) => {
  const selectedField = form.fields[fieldIndex];
  const { formId } = form;
  return (
    <Col>
      <Tabs activeKey={tab} onSelect={(k) => setTab(k)}>
        <Tab eventKey="addField" title="Add a Field">
          Add fields
          <Button onClick={createField.bind(null, formId, "text")}>
            Single Line Text
          </Button>
        </Tab>
        <Tab eventKey="editField" title="Field Settings">
          <EditField fieldId={selectedField} updateField={updateField} />
        </Tab>
        <Tab eventKey="editForm" title="Form Settings">
          Form Settings
        </Tab>
      </Tabs>
    </Col>
  );
};

export default EditPane;
