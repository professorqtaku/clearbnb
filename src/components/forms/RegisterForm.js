import Radium from 'radium'
import { UserContext } from '../../contexts/UserContextProvider'
import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import RegisterErrorMessage from "../RegisterErrorMessage";

function RegisterForm(props) {
  const { toggleModal } = props
  const { setUser } = useContext(UserContext)
  const history = useHistory()
  const [registerError, setRegisterError] = useState(false)

  const submitRegister = async (e) => {
    e.preventDefault();
    let email = document.getElementById('inputEmail').value.toString().trim()
    let password = document.getElementById("inputPassword").value;
    console.log(email, password);
    if (email && password) {
      console.log("im here")
      let isRegister = await register(email, password)
      if (isRegister) {
        setRegisterError(false)
        if (window.location.pathname === "/register") {
          toggleModal()
          history.push("/mypage")
        }
      }
      setRegisterError(true)
    }
  }

  const register = async (email, password) => {
    let userInput = {
      email: email,
      password: password,
    };

    let res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userInput),
    });
    res = await res.json();
    if (!res.error) {
      setUser(res);
      return true;
    }
    return false;
  };

  const toLogin = () => {
    toggleModal()
    history.push('/login')
  }

  return (
    <div>
      <div style={styles.gridContainer} className="container">
         <div className="text-center">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="firstName" className="form-control" id="firstNameInput" placeholder="First Name"></input>
          </div>
          <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="lastName" className="form-control" id="lastNameInput" placeholder="Last Name"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
             <input type="email" className="form-control" id="emailInput" placeholder="Email Address"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="passwordInput" placeholder="Password"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPasswordInput" placeholder="Confirm Password"></input>
          </div>
          <RegisterErrorMessage registerinError={registerError} />
          <button type="submit" style={styles.submit}>Register</button>
          </div>
          <div>
          <button type="button" style={styles.link} class="btn btn-link" onClick={toLogin}> Already have an account?</button>
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
      minWidth: "280px",
      marginTop: '100px',
      backgroundColor: 'rgba(255, 255, 255, 0.73)',
      display: 'grid',
      border: '1px solid grey',
      borderRadius: '20px',
      padding: '20px'
    },
  
    wrapper: {
      marginTop: '50px',
      // backgroundColor: 'rgba(255, 255, 255, 0.73)',
      display: 'grid',
      gridTemplateRows: '3fr',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridGap: '10px'
    },
    submit: {
      border: 'black',
      color: 'white',
      width: '40%',
      paddingTop: '5px',
      paddingBottom: '5px',
      backgroundColor: '#FF646F',
      borderRadius: '20px',
      
    },
  
    link: {
      color: "var(--darkgrey)",
    },
  
    input: {
      width: '100%'
    },
  }