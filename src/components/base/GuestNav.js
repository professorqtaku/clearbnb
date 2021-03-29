import LoginModal from "../modals/LoginModal"
import RegisterModal from "../modals/RegisterModal";


export default function GuestNav(props) {
  const { toggleToast } = props
  return (
    <div
      className="collapse navbar-collapse"
      id="navbarContent"
      style={styles.content}
    >
      <div className="mx-auto"></div>
      <ul className="navbar-nav">
        <LoginModal toggleToast={toggleToast}/>
        <RegisterModal/>
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
