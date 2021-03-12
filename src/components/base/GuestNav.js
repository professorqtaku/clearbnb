import { useHistory } from "react-router-dom";
import Nav from "./Nav";


export default function GuestNav() {
  
  return (
    <div
      className="collapse navbar-collapse"
      id="navbarContent"
      style={styles.content}
    >
      <div className="mx-auto"></div>
      <ul className="navbar-nav">
        <Nav content="Become member" value="register" />
        <Nav content="Login" value="login"/>
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
