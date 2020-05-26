import React from "react";
import { Link } from "@reach/router";

// Remove hardcode later
const userId = "1234";

const FormCard = ({ title, formId }) => (
  <li key={formId}>
    <Link to={`/${formId}`}>{title}</Link>
  </li>
);

const FormsList = ({ forms, createForm }) => (
  <div>
    <h1>FormsList</h1>
    <ul>{forms.map(FormCard)}</ul>
    <button onClick={createForm.bind(userId)}>Add form</button>
  </div>
);

export default FormsList;
