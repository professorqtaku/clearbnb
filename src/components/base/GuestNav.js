import { useHistory } from "react-router-dom";
import Radium from 'radium'


export default function GuestNav() {
    const history = useHistory();

  const goTo = (e) => {
    history.push("/" + e.target.value);
  };
  
  return (
    <div
      className="collapse navbar-collapse"
      id="navbarContent"
      style={styles.content}
    >
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
  );
}

const styles = {
  button: {
    color: "white",
    fontWeight: "bold",
    ":focus": {
      outline: "none !important",
      boxShadow: "none",
    },
  },
  content: {
    transition: "300ms",
  },
};
