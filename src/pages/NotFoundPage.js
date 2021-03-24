export default function NotFoundPage() {
  return (
    <div style={styles}>
      <h1 style={styles.title}>404
      {/*<p style={styles.link}>{window.location.pathname}</p>*/}
      </h1>
      <p style={styles.link}>Page not found</p>
    </div>
  )
}

const styles = {
  /*width: '300px',
  height: '400px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',*/

  margin: '0 auto',
  textAlign: 'center',
  marginTop: '10%',
  marginBottom: '20%',




  title: {
    fontSize: '10em',
  },

  link: {
    color: 'grey',
    fontSize: '2em',
  }
}
