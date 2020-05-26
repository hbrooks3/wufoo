import React from "react";
import logo from "./logo.svg";
import "./App.css";

// redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "actions";

// routing
// import { Router, Link } from "@reach/router";

const mapStateToProps = ({ forms }) => ({ forms });

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

const App = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <pre>{props.forms[0].userId}</pre>
    </header>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
