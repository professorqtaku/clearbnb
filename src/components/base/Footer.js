export default function Footer() {
    return (
      <div className="footer" style={styles.footer}>
          <button
          className="btn btn-sm"
          style={styles.button}>Om oss</button>
          <button
          className="btn btn-sm"
          style={styles.button}>Kontakta oss</button>
        <center><p style={styles.text}>Copyright 2021 | Group 5 TH Lund</p></center>
      </div>
    )
  }

  const styles = {
    footer: {
      backgroundColor: "var(--lightgrey)",
      color: "var(--darkgrey) !important",
      marginTop: "5px",
      
    },
    button: {
      color: "var(--darkgrey)",
      ":focus": {
        outline: "none !important",
        boxShadow: "none",
      }
    },
    text: {
      margin: "0"
    }
  };