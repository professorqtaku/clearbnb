import Radium from 'radium'
export default function MyPage() {
  return (
    <div className="container">
      <div className="d-grid gap-2 text-center" style={styles.wrapper}>
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
    marginBottom: '20px',
    paddingTop: '20px',
    paddingBottom: '20px',
    fontSize: '2em',
    marginLeft: '30%',
    marginRight: '30%',
    borderRadius: '50px',
    boxShadow: '2px 3px 5px grey',
  }

}