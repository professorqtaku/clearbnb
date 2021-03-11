export default function RegisterPage() {
  return (
    <div>
      <h1>Register</h1>
      <div style={styles.gridContainer} className="container">
        <div className="text-center">
          <div className="mb-3">
            <label for="firstName" className="form-label">First Name</label>
            <input type="firstName" className="form-control" id="firstNameInput" placeholder="First Name"></input>
          </div>
          <div className="mb-3">
            <label for="lastName" className="form-label">Last Name</label>
            <input type="lastName" className="form-control" id="lastNameInput" placeholder="Last Name"></input>
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="emailInput" placeholder="Email Address"></input>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="passwordInput" placeholder="Password"></input>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPasswordInput" placeholder="Confirm Password"></input>
          </div>
          <button type="submit" style={styles.submit}>Register</button>
          </div>
          <div>
          <button type="button" class="btn btn-link"> Already have an account?</button>
          </div>
      </div>
    </div>
  )
}

  const styles = {
    gridContainer: {
    width: '50%',
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
    border: '1px solid grey',
  },
  input: {
    width: '100%'
  },
}

