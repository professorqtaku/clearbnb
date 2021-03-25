export default function ErrorMessage(props) {
  const { showMessage, message, height } = props
  const printMessage = () => {
    return (
      <p>
        { message }
      </p>
    )
  }
  return <div style={height ? {...styles.message, height: height} : styles.message}>{showMessage ? printMessage() : null} </div>;
}

const styles = {
  message: {
    color: 'red',
    width: '100%',
    height: '5vh'
  }
}