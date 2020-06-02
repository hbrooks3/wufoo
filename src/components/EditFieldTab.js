import React from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { selectField } from "selectors";
import { updateField, deleteField } from "actions";

// bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// data
import { fieldTypes } from "data/constants";

const EditFieldTab = ({ fieldId }) => {
  const dispatch = useDispatch();
  const field = useSelector(selectField(fieldId));

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateField({ ...field, [name]: value }));
  };
  const handleDelete = () => {
    dispatch(deleteField(fieldId));
  };
  const handleCheck = (event) => {
    const { name, checked } = event.target;
    dispatch(updateField({ ...field, [name]: checked }));
  };

  if (!field) return null;

  const { label, inputType, size, required, instructions } = field;

  return (
    <Form className="m-3" onSubmit={(e) => e.preventDefault()}>
      <Form.Group>
        <Form.Label>Field Label</Form.Label>
        <Form.Control
          as="textarea"
          name="label"
          value={label}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Field Type</Form.Label>
        <Form.Control
          as="select"
          onChange={handleChange}
          name="inputType"
          value={inputType}
        >
          {fieldTypes.map(({ display, type }, i) => (
            <option key={i} value={type}>
              {display}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Field Size</Form.Label>
        <Form.Control
          as="select"
          onChange={handleChange}
          name="size"
          value={size}
        >
          <option value="sm">Small</option>
          <option value="m">Medium</option>
          <option value="lg">Large</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Required</Form.Label>
        <Form.Check
          aria-label="Required"
          onChange={handleCheck}
          name="required"
          checked={required}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Instructions</Form.Label>
        <Form.Control
          as="textarea"
          name="instructions"
          value={instructions}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="danger" onClick={handleDelete}>
        Delete Field
      </Button>
    </Form>
  );
};

export default EditFieldTab;
