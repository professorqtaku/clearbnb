import Radium from 'radium'
export default function MyPage() {
  return (
    <div className="container text-center">
      <div className="d-grid gap-2" style={styles.wrapper}>
        <h1>My Page</h1>
        <button className="btn btn-primary" type="button" style={styles.btn}>My bookings</button>
        <button className="btn btn-primary" type="button" style={styles.btn}>My hostings</button>
        <button className="btn btn-primary" type="button" style={styles.btn}>Post a hosting</button>
        <button className="btn btn-primary" type="button" style={styles.btn}>Search places</button>
      </div>
    </div >
  )
}

const styles = {
  btn: {
    backgroundColor: 'var(--pink)',
    border: 'none',
    paddingTop: '20px',
    paddingBottom: '20px',
    //fontSize: '2em',
    //marginLeft: 'min(200px, 20%)',
    //marginRight: 'min(200px, 20%)',
    width: '100%',
    borderRadius: '50px',
    boxShadow: '2px 3px 5px grey',
  },
  wrapper: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto'
  }
}