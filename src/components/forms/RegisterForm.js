import Radium from 'radium'
import { UserContext } from '../../contexts/UserContextProvider'
import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ErrorMessage from "../ErrorMessage";

function RegisterForm(props) {
  const { toggleModal } = props
  const { fetchUser } = useContext(UserContext)
  const history = useHistory()
  const [registerError, setRegisterError] = useState(false)

  const submitRegister = async (e) => {
    e.preventDefault();
    let firstName = document.getElementById('firstNameInput').value.toString().trim()
    let lastName = document.getElementById('lastNameInput').value.toString().trim()
    let email = document.getElementById('emailInput').value.toString().trim()
    let password = document.getElementById("passwordInput").value;
    let confirmPassword = document.getElementById("confirmPasswordInput").value

      let isRegister = await register( email, firstName, lastName, password, confirmPassword)
      if (isRegister) {
        setRegisterError(true)
        }
  }
  const register = async (email, firstName, lastName, password, confirmPassword) => {
    let userInput = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      confirmPassword: confirmPassword
    };

    let res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userInput),
    });

    res = await res.json();
    if (res.success) {
      fetchUser()
      history.push('/MyPage')
    }
    return true;
  };

  const toLogin = () => {
    toggleModal()
    history.push('/')
  }

    return (
      <div>
        <div style={styles.gridContainer} className="container">
          <div className="text-center">
          <form onSubmit={submitRegister}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="firstName" className="form-control" id="firstNameInput" placeholder="First Name"
              style={styles.input} required></input>
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="lastName" className="form-control" id="lastNameInput" placeholder="Last Name"
              style={styles.input} required></input>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="emailInput" placeholder="Email Address"
              style={styles.input} required></input>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="passwordInput" placeholder="Password"
               style={styles.input} required></input>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPasswordInput" placeholder="Confirm Password"
               style={styles.input} required></input>
            </div>
            <ErrorMessage showMessage={registerError} message = "Password does not match"/>
            <button type="submit" style={styles.submit}>Register</button>
            </form>
            </div>
            <div>
            <button type="button" className="btn btn-link" style={styles.link} onClick={toLogin}>
              Already a member?
            </button>
          </div>
        </div>
      </div>
    )
}

export default Radium(RegisterForm)

const styles = {
  gridContainer: {
    width: "90%",
    maxWidth: "400px",
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
    width: "100%"
  },
  link: {
    color: "var(--darkgrey)",
  },
}
