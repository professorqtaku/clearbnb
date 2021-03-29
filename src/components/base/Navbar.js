import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContextProvider";
import GuestNav from './GuestNav'
import UserNav from './UserNav'
import LoginToast from './StatusToast'

export default function Navbar(props) {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [showLoginToast, setShowLoginToast] = useState(false)
  const toggleLoginToast = () => {
    setShowLoginToast(!showLoginToast)
    setTimeout(() => {
        setShowLoginToast(false)
      }, 5000)
  }

  const goTo = (e) => {
    history.push("/" + e.target.value);
  }

  const nav = () => {
    if(user)
    return (
      <UserNav />
      )
    return <GuestNav toggleToast={toggleLoginToast}/>
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
            {/* <span className="material-icons text-white">
              menu
            </span> */}
            <span className="navbar-toggler-icon"></span>
          </button>

          {nav()}
        </div>
      </nav>
      <LoginToast show={showLoginToast} setShow={setShowLoginToast} content="Login successful"/>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: "var(--pink)",
    color: "white !important",
  }
};
