export default function Loading() {

  return (
    <div className="container-fluid" style={styles.container}>
      <div className="d-flex justify-content-center align-items-center" style={styles.container}>
      <strong className="m-3">Loading...</strong>
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100%',
    backgroundColor: "var(--lightgrey)",
    borderRadius: "10px",
    color: "var(--darkgrey)"
  }
}