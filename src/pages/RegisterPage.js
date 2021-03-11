export default function RegisterPage() {
  return (
    <div>
      <h1>Register</h1>
      <div className="container">
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
        <input className="btn btn-primary" type="submit" value="Submit"></input>
      </div>    
    </div>
  );
}
