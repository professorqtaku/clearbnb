export default function RegisterErrorMessage(props) {
    const registerError = props.registerError
    const message = () => {
      return (
        <p>
          Email is already in use
        </p>
      )
    }
    
    return <div style={styles.message}>{registerError ? message() : ''} </div>;
  }
  
  const styles = {
    message: {
      color: 'red',
      width: '100%',
      height: '5vh'
    }
  }