import { Link, useHistory } from "react-router-dom";
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContextProvider'

export default function Navbar(props) {
  const { user } = useContext(UserContext)
  const history = useHistory();

  function goTo(e) {
    history.push("/" + e.target.value);
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={styles.navbar}
      >
        <div className="container-fluid">
          <button className="btn navbar-brand me-auto" onClick={goTo} value="">
            ClearBnB
          </button>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navbarButton"
          >
            <span className="material-icons" style={styles.icon}>
              menu
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent" style={styles.content}>
            <div className="mx-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item nav-link">
                <button
                  className="btn btn-sm"
                  onClick={goTo}
                  value="register"
                  style={styles.button}
                >
                  Become member
                  </button>
              </li>
              <li className="nav-item nav-link">
                <button
                  className="btn btn-sm"
                  onClick={goTo}
                  value="login"
                  style={styles.button}
                >
                  Login
                  </button>
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
    color: "white",
    ":focus": {
      outline: "none !important",
      boxShadow: "none",
    },
  },
  content: {
    transition: "300ms",
  },
};
