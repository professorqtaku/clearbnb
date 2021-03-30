import robotError from '../assets/img/clearRob.png'

export default function NotFoundPage() {
  return (
    <div style={styles}>
      <div class="container-fluid">
        <div class="row" style={styles.rows}>
          <div class="col-lg-2"></div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3" style={styles.text}>
            <h1 style={styles.title}>404<p style={styles.link}>Page not found</p></h1>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6" style={styles.picture}>
            <img style={styles.picture} src={robotError} alt={robotError}/>
          </div>
        </div>
      </div>
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

  marginTop: '50px',
  marginBottom: '50px',

  maxWidth: '1200px',
  margin: '0 auto',
  height: '100%',


  rows: {
    marginTop: '20px',
  },

  text: {
    textAlign: 'center',
  },
  picture: {
    maxWidth: '100%',
    height: 'auto',
    textAlign: 'center',
  },
  title: {
    marginTop: '10%',
    fontSize: '10em',
  },

  link: {
    color: 'grey',
    fontSize: '39px',
  },
}
