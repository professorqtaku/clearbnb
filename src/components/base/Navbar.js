export default function Navbar() {

  function toRegister(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={styles.navbar}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="material-icons" style={styles.icon}>
              menu
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent" style={ styles.content }>
            <ul className="navbar-nav">
              <li className="nav-item nav-link">
                <button className="btn btn-sm" onClick={toRegister} value="register" style={styles.button}>Become member</button>
              </li>
              <li className="nav-item nav-link">
                <button className="btn btn-sm" onClick={toRegister} value="login" style={styles.button}>Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: "var(--pink)",
    color: "white !important",
  },
  icon: {
    color: "white",
  },
  button: {

  },
  content: {
  },
};
