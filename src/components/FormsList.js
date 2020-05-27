import React from "react";
import { Link } from "@reach/router";

// redux
import { useSelector, useDispatch } from "react-redux";
import { createForm } from "actions";

// Remove hardcode later
const userId = "1234";

const FormCard = ({ title, formId }) => (
  <li key={formId}>
    <Link to={`/${formId}`}>{title}</Link>
  </li>
);

const FormsList = () => {
  const forms = useSelector((state) => state.forms);
  const dispatch = useDispatch();
  const handleClick = (userId) => () => {
    dispatch(createForm(userId));
  };

  return (
    <div>
      <h1>FormsList</h1>
      <ul>{forms.map(FormCard)}</ul>
      <button onClick={handleClick(userId)}>Add form</button>
    </div>
  );
};

export default FormsList;
