export default function Footer() {
    return (
      <div className="footer" style={styles.footer}>
          <button
          className="btn btn-sm"
          style={styles.button}>About us</button>
          <button
          className="btn btn-sm"
          style={styles.button}>Contact us</button>
          <button
          className="btn btn-sm"
          style={styles.button}>Become member</button>
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