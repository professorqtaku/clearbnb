import { getSuggestedQuery } from '@testing-library/dom'
import robotError from '../assets/img/robotError.jpg'

export default function NotFoundPage() {
  return (
    <div style={styles}>
      <div style={styles.text}>
        <h1 style={styles.title}>404 <p style={styles.link}>Page not found</p></h1>

      </div>
      <div style={styles.picture}>
        <img style={styles.image} src={robotError} />
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
  display: 'grid',
  gridTemplateColumns: '40% 60%',
  margin: '0 auto',
  marginTop: '5%',
  marginBottom: '3%',
  text: {
    textAlign: 'right',
  },
  picture: {
  },
  title: {
    marginTop: '10%',
    fontSize: '10em',
  },

  link: {
    color: 'grey',
    fontSize: '39px',
  },
  image: {
    backgroundColor: 'blue',
  }
}
