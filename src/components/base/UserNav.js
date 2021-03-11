import { useHistory } from "react-router-dom";
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContextProvider"
import Radium from 'radium'

export default function UserNav(props) {
  const history = useHistory();
  const { user, logout } = useContext(UserContext);

  const goTo = (e) => {
    history.push("/" + e.target.value);
  };
  
  const loggingOut = () => {
    let isLoggedOut = logout()
    if (isLoggedOut) {
      history.push("/");
    }
  }

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
            value="mypage"
            style={styles.button}
          >
            <span className="">
              {user.firstName}
              {/* <span className="material-icons" style={styles.icon}>person</span> */}
            </span>
          </button>
        </li>
        <li className="nav-item nav-link">
          <button
            className="btn btn-sm"
            onClick={loggingOut}
            value="logout"
            style={styles.button}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

const styles = {
  button: {
    color: "white",
    fontWeight: 'bold',
    ":focus": {
      outline: "none !important",
      boxShadow: "none",
    }
  },
  content: {
    transition: "300ms",
  },
  icon: {
    color: 'var(--green)'
  }
};
