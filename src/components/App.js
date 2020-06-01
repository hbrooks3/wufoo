import React from "react";

// routing
import { Router } from "@reach/router";

import FormsList from "components/FormsList";
import FormView from "components/FormView";
import Header from "components/Header";

const App = () => (
  <>
    <Header />
    <Router>
      <FormsList path="/" />
      <FormView path="/:formId" />
    </Router>
  </>
);

export default App;
