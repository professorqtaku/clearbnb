import { useHistory } from 'react-router-dom'
import Radium from 'radium'

function Nav(props) {
  const history = useHistory();

  const content = props.content;
  const value = props.value;
  const onClick = props.onClick;
  const textColor = props.textColor
  const toggle = props.toggle
  const targetId = props.targetId

  const onclick = (e) => {
    if (!onClick && value) {
      history.push("/" + value);
    }
    else if (onClick){
      onClick()
    }
  };

  
  
  return (
    <li className="nav-item nav-link">
      <button
        className="btn btn-sm"
        value={value}
        style={styles.button}
        onClick={onclick}
        data-bs-toggle={toggle}
        data-bs-target={targetId}
        >
        <span style={{color:textColor}}>{content}</span>
      </button>
    </li>
  );
}
export default Radium(Nav)

const styles = {
  button: {
    color: "white",
    fontWeight: "bold",
    ":focus": {
      outline: "none !important",
      boxShadow: "none",
    },
  },
};
