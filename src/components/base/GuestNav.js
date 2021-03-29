import LoginModal from "../modals/LoginModal"
import RegisterModal from "../modals/RegisterModal";
import { useContext } from 'react'
import {LoginModalContext} from '../../contexts/LoginModalContextProvider'
import Nav from "../base/Nav";


export default function GuestNav(props) {
  const { toggleLoginModal } = useContext(LoginModalContext)
  const { toggleToast } = props

  return (
    <div
      className="collapse navbar-collapse"
      id="navbarContent"
      style={styles.content}
    >
      <div className="mx-auto"></div>
      <ul className="navbar-nav">
        <Nav content="Log in" onClick={toggleLoginModal} />
        <LoginModal toggleToast={toggleToast} />
        <RegisterModal />
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
