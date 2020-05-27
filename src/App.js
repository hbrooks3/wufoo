import React from "react";
import "./App.css";

// redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "actions";

// routing
import { Router } from "@reach/router";

import FormsList from "components/FormsList";
import FormView from "components/FormView";

const mapStateToProps = ({ forms }) => ({ forms });

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

const App = ({ forms, createForm, createField, updateField }) => (
  <Router>
    <FormsList path="/" forms={forms} createForm={createForm} />
    <FormView
      path="/:formId"
      updateField={updateField}
      createField={createField}
    />
  </Router>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
