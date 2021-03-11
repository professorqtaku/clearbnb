export default function LoginErrorMessage(props) {
  const loginError = props.loginError
  const message = () => {
    return (
      <p>
        Email/password incorrect
      </p>
    )
  }
  
  return <div style={styles.message}>{loginError ? message() : ''} </div>;
}

const styles = {
  message: {
    color: 'red'
  }
}