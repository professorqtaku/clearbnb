import React from "react";
import {useHistory } from "react-router-dom"
import Radium from 'radium'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

const Footer = () => {
  const history = useHistory()
  const goTo = (event) => {
    history.push(`/${event.target.value}`)
  }

  return (
    <div className="container-fluid" style={styles.container}>
      <div className="container mt-5">
        <div className="row font-small">
          <div className="col-md-4 mb-3 text-center" style={styles.link}>
            <button
              className="btn text-uppercase text-muted"
              onClick={goTo}
              value="about"
              style={styles.button}
              key="footer-about"
            >
              About us
            </button>
          </div>
          <div className="col-md-4 mb-3 text-center" style={styles.link}>
            <button
              className="btn text-uppercase text-muted"
              onClick={goTo}
              value="contact"
              style={styles.button}
              key="footer-contact"
            >
              Contact us
            </button>
          </div>
          <div className="col-md-4 mb-3 text-center" style={styles.link}>
            <button
              className="btn text-uppercase text-muted"
              value="register"
              style={styles.button}
              key="footer-signup"
            >
              Become a member
            </button>
          </div>
        </div>
        <hr />
      </div>
      <div className="row text-center">
        <h6 className="text-muted">&copy;Copyright 2021 | Group 5 TH Lund</h6>
      </div>
    </div>
  );
};

export default Radium(Footer);

const styles = {
  container: {
    backgroundColor: "var(--lightgrey)",
    borderTop: "2px solid var(--darkgrey)",
  },
  button: {
    fontWeight: "bold",
    ":focus": {
      outline: "none !important",
      boxShadow: "none",
    },
    ":hover": {
      textDecoration: "underline"
    }
  },
};