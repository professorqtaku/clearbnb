import { useHistory } from 'react-router-dom'

export default function Nav(props) {
  const history = useHistory();

  const content = props.content;
  const value = props.value;
  const onClick = props.onClick;

  const onclick = (e) => {
    if (!onClick) {
      history.push("/" + value);
    }
    else {
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
      >
        <span className="">{content}</span>
      </button>
    </li>
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
};
