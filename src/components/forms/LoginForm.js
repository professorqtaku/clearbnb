import Radium from 'radium'
import { UserContext } from '../../contexts/UserContextProvider'
import { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import LoginErrorMessage from "../LoginErrorMessage";

function LoginForm() {
  const { login } = useContext(UserContext)
  const history = useHistory()
  const [ loginError, setLoginError ] = useState(false)

  const submitLogin = async (e) => {
    e.preventDefault();
    let email = document.getElementById('inputEmail').value.toString().trim()
    let password = document.getElementById("inputPassword").value;
    if (email && password) {
      let isLogin = await login(email, password)
      if (isLogin) {
        setLoginError(false)
        history.push('/mypage')
      }
      setLoginError(true)
    }
  }

  return (
    <div style={styles.gridContainer} className="container">
      <div>
        <div className="text-center">
          <form onSubmit={submitLogin}>
            <div className="mb-3">
              <label for="inputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email address..."
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label for="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password..."
                required
              />
            </div>
            <LoginErrorMessage loginError={ loginError }/>
            <button type="submit" style={styles.submit}>
              Log in
            </button>
          </form>
          <div>
            <button type="button" class="btn btn-link" style={styles.link}>
              Not a member yet?
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Radium(LoginForm)

const styles = {
  gridContainer: {
    width: "90%",
    maxWidth: "400px",
    marginTop: "100px",
    display: "grid",
    border: "1px solid grey",
    borderRadius: "20px",
    padding: "20px",
  },

  submit: {
    color: "white",
    width: "40%",
    paddingTop: "5px",
    paddingBottom: "5px",
    backgroundColor: "var(--pink)",
    borderRadius: "20px",
    border: "none",
    marginBottom: "10px",
    transition: "200ms",
    ":hover": {
      opacity: "0.8",
      cursor: "pointer",
      transform: "scale(1.03)",
    },
  },
  input: {
    width: "100%",
  },
  link: {
    color: "var(--darkgrey)",
  },
};