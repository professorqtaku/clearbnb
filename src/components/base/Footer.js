import { Link, useHistory } from "react-router-dom";
export default function Footer() {
  const history = useHistory();

    return (
      <div className="footer" style={styles.footer}>
        <button
        className="btn btn-sm"
        style={styles.button} onClick={() => history.push('/aboutus')}>About us</button>
        <button
        className="btn btn-sm"
        style={styles.button}>Contact us</button>
        <button
        className="btn btn-sm"
        style={styles.button} onClick={() => history.push('/register')}>Become member</button>
        <p style={styles.copyright}>Copyright 2021 | Group 5 TH Lund</p>
      </div>
    )
  }

  const styles = {
    footer: {
      backgroundColor: "var(--lightgrey)",
      color: "var(--darkgrey) !important",
      
    },
    button: {
      color: "#686868",
      ":focus": {
        outline: "none !important",
        boxShadow: "none",
      },
      marginTop: "20px",
      fontSize: "18px",
    },
    
    copyright: {
      color: "#9C9C9C",
      textAlign: "center",
      margin: "0",
      padding: "o",
      fontSize: "14px",
    }
  };