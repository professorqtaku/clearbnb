import { useContext } from "react";
import { LoginModalContext } from '../../contexts/LoginModalContextProvider'
import Radium from 'radium'

const LoginButton = (props) => {
  const { toggleLoginModal }= useContext(LoginModalContext)
  return (
    <div>
      <button className="btn" style={styles.button} onClick={ toggleLoginModal }>Log in</button>
    </div>
  );
};

export default Radium(LoginButton);

const styles = {
  button: {
    backgroundColor: 'var(--pink)',
    color: 'white',
    fontWeight: 'bold',
    width: '100%',
    borderRadius: '50px',
    ':focus': {
      border: 'none !important'
    }
  }
}