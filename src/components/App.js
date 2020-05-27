import React from "react";
import "./App.css";

// routing
import { Router } from "@reach/router";

import FormsList from "components/FormsList";
import FormView from "components/FormView";

const App = () => (
  <Router>
    <FormsList path="/" />
    <FormView path="/:formId" />
  </Router>
);

export default App;
