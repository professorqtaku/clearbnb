import { useHistory } from "react-router-dom";
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContextProvider"
import useWindowSize from "../../utils/useWindowSize"
import Nav from './Nav'

export default function UserNav(props) {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const { width } = useWindowSize()

  const logout = async () => {
    let res = await fetch("/api/login", {
      method: "DELETE",
    });
    res = await res.json();
    if (res.success) {
      setUser(null);
      history.push("/");
    }
  }

  const showIcon = (innerWidth) => {
    if(window.innerWidth > 770 && innerWidth > 770 )
    return (
      <Nav
        content={<span className="material-icons">person</span>}
        value="mypage"
        textColor="var(--green)"
        />
    );
  }

  const colorText = () => {
    if (width < 770)
      return "var(--green)"
  };

  return (
    <div
      className="collapse navbar-collapse"
      id="navbarContent"
      style={styles.content}
    >
      <div className="mx-auto"></div>
      <ul className="navbar-nav">
        {showIcon(width)}
        <Nav content={user.firstName} value="mypage" textColor={colorText} />
        <Nav content="Logout" onClick={logout} value="logout" />
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
