import React from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { selectField, selectForm } from "selectors";
import { updateForm, updateField, deleteField } from "actions";

// tabs
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// components
import AddFieldTab from "components/AddFieldTab";

const EditField = ({ fieldId }) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateField({ ...field, [name]: value }));
  };
  const handleDelete = () => {
    dispatch(deleteField(fieldId));
  };

  const field = useSelector(selectField(fieldId));

  if (!field) return null;

  const { label } = field;

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
      <Button variant="danger" onClick={handleDelete}>
        Delete Field
      </Button>
    </Form>
  );
};

const EditForm = ({ formId }) => {
  const dispatch = useDispatch();
  const form = useSelector(selectForm(formId));
  const { title, desc } = form;
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateForm({ ...form, [name]: value }));
  };
  return (
    <Form>
      <Form.Group>
        <Form.Label>Form Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="desc"
          value={desc}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};

const EditPane = ({ tab, setTab, fieldIndex, form }) => {
  const selectedField = form.fields[fieldIndex];
  const { formId } = form;
  return (
    <Tabs activeKey={tab} onSelect={(k) => setTab(k)}>
      <Tab eventKey="addField" title="Add a Field">
        <AddFieldTab formId={formId} />
      </Tab>
      <Tab eventKey="editField" title="Field Settings">
        <EditField fieldId={selectedField} />
      </Tab>
      <Tab eventKey="editForm" title="Form Settings">
        <EditForm formId={formId} />
      </Tab>
    </Tabs>
  );
};

export default EditPane;
