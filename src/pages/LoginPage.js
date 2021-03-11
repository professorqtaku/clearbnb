import { Redirect } from "react-router"

export default function LoginPage() {
  return (
    <div style={styles.gridContainer} className="container">
      <div >
        <div className="text-center">
          <form >
            <div className="mb-3">
              <label for="inputEmail" className="form-label">Email address</label>
              <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label for="inputPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword" />
            </div>
            <button type="submit" style={styles.submit}>Log in</button>
          </form>
          <div>
            <a>Not a member? <a className="register">Register</a></a>
          </div>
        </div>
      </div>
    </div>
  )

}

const styles = {
  gridContainer: {
    width: '30%',
    marginTop: '100px',
    backgroundColor: 'rgba(255, 255, 255, 0.73)',
    display: 'grid',
    border: '1px solid grey',
    borderRadius: '20px',
    padding: '20px'
  },

  submit: {
    border: 'black',
    color: 'white',
    width: '40%',
    paddingTop: '5px',
    paddingBottom: '5px',
    backgroundColor: '#FF646F',
    borderRadius: '20px',
    border: '1px solid grey',
    marginBottom: '10px',
  },
  input: {
    width: '100%'
  },
}