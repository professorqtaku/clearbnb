export default function LoginErrorMessage(props) {
  const { showMessage, message } = props
  const printMessage = () => {
    return (
      <p>
        { message }
      </p>
    )
  }
  return <div style={styles.message}>{showMessage ? printMessage() : null} </div>;
}

export function RegisterErrorMessage(props) {
  const { showMessage, message } = props
  const printMessage = () => {
    return (
      <p>
        { message }
      </p>
    )
  }
  return <div style={styles.message}>{showMessage ? printMessage() : null} </div>;
}
export function SecondRegisterErrorMessage(props) {
  const { showMessage, message } = props
  const printMessage = () => {
    return (
      <p>
        { message }
      </p>
    )
  }
  return <div style={styles.message}>{showMessage ? printMessage() : null} </div>;
}

const styles = {
  message: {
    color: 'red',
    width: '100%',
    height: '5vh'
  }
}