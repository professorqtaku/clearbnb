import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContextProvider";
import GuestNav from './GuestNav'
import UserNav from './UserNav'

export default function Navbar(props) {
  const { user } = useContext(UserContext);
  const history = useHistory();

  const goTo = (e) => {
    history.push("/" + e.target.value);
  }

  const guestNav = () => {
    if(user)
    return (
      <UserNav />
      )
    return <GuestNav />
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

          { guestNav() }
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
  }
};
