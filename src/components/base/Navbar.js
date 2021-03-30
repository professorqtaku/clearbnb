import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContextProvider";
import GuestNav from './GuestNav'
import UserNav from './UserNav'
import StatusToast from './StatusToast'
import Logo from '../../assets/img/logo.png'

export default function Navbar(props) {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [showLoginToast, setShowLoginToast] = useState(false)
  const [showLogoutToast, setShowLogoutToast] = useState(false)
  const toggleLoginToast = () => {
    setShowLoginToast(!showLoginToast)
    setTimeout(() => {
      setShowLoginToast(false)
    }, 5000)
  }
  const toggleLogoutToast = () => {
    setShowLogoutToast(!showLogoutToast)
    setTimeout(() => {
      setShowLogoutToast(false)
    }, 5000)
  }

  const goToHome = (e) => {
    history.push("/");
  }

  const nav = () => {
    if (user)
      return (
        <UserNav toggleToast={toggleLogoutToast} />
      )
    return <GuestNav toggleToast={toggleLoginToast} />
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={styles.navbar}
      >
        <div className="container-fluid">
          <button className="btn navbar-brand me-auto" onClick={goToHome}>
            <img src={Logo} alt="ClearBnB" style={styles.logo} />
          </button>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navbarButton"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {nav()}
        </div>
      </nav>
      <StatusToast show={showLoginToast} setShow={setShowLoginToast} content="Login successful" />
      <StatusToast show={showLogoutToast} setShow={setShowLogoutToast} content="Logout successful" />
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: "var(--pink)",
    color: "white !important",
  },
  logo: {
    maxHeight: "50px",
  }
};
