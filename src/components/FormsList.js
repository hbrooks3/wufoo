import React from "react";

const FormCard = ({ title, formId }) => <li key={formId}>{title}</li>;

const FormsList = ({ forms }) => (
  <div>
    <h1>FormsList</h1>
    <ul>{forms.map(FormCard)}</ul>
  </div>
);

export default FormsList;
