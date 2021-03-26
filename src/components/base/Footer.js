import React from "react";
import {useHistory } from "react-router-dom"
import Radium from 'radium'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

const Footer = () => {
  const history = useHistory()
  const goTo = (event) => {
    console.log(event.target);
    console.log(event.target.value);
    history.push(`/${event.target.value}`)
  }

  return (
    <div className="container-fluid" style={styles.container}>
      <div className="container mt-5">
        <div className="row font-small">
          <div className="col-md-4 mb-3 text-center" style={styles.link}>
            <button className="btn" onClick={goTo} value="about">
              <h6
                className="text-uppercase font-weight-bold text-muted"
              >
                About us
              </h6>
            </button>
          </div>
          <div className="col-md-4 mb-3 text-center" style={styles.link}>
            <button className="btn" onClick={goTo} value="contact">
              <h6
                className="text-uppercase font-weight-bold text-muted"
              >
                Contact us
              </h6>
            </button>
          </div>
          <div className="col-md-4 mb-3 text-center" style={styles.link}>
            <button className="btn" onClick={goTo} value="register">
              <h6
                className="text-uppercase font-weight-bold text-muted"
              >
                Sign up
              </h6>
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
  link: {
  },
};