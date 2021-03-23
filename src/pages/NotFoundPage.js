export default function NotFoundPage() {
  return (
    <h1 style={styles}>Page not found:
      <p style={styles.link}>{window.location.pathname}</p>
    </h1>
  )
}

const styles = {
  width: '100%',
  margin: 'auto',
  textAlign: 'center',
  marginTop: '20px',
  marginBottom: '20px',

  link: {
    color: 'grey',
  }
}
