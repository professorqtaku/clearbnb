import { Redirect } from "react-router"

export default function LoginPage() {
  return (
    <div>
      <form >
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn btn-primary">Log in</button>
      </form>
    </div>
  )

}

const styles = {
  /*gridContainer: {
    marginTop: '50px',
    // backgroundColor: 'rgba(255, 255, 255, 0.73)',
    display: 'grid',
    gridTemplateRows: '3fr',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '10px'
  },*/

  wrapper: {
    marginTop: '50px',
    // backgroundColor: 'rgba(255, 255, 255, 0.73)',
    display: 'grid',
    gridTemplateRows: '3fr',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '10px'
  },
  btn: {
    backgroundColor: 'red'
  },
  input: {
    width: '100%'
  },

  location: {
    gridArea: '1/1/2/3'
  },
}