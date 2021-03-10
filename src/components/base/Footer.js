export default function Footer() {
    return (
      <div className="footer" style={styles.footer}>
          <button
          className="btn btn-sm"
          style={styles.button}>Om oss</button>
          <button
          className="btn btn-sm"
          style={styles.button}>Kontakta oss</button>
        <center><p>Copyright 2021 | Group 5 TH Lund</p></center>
      </div>
    )
  }

  const styles = {
    footer: {
      backgroundColor: "var(--lightgrey)",
      color: "var(--darkgrey) !important",
      
    },
    button: {
      color: "var(--darkgrey)",
      ":focus": {
        outline: "none !important",
        boxShadow: "none",
      }
    },
  };