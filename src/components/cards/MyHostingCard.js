import { useHistory } from 'react-router-dom'
import Radium from 'radium'
import NoImage from '../../assets/img/noimage.png'
          

const MyHostingCard = (props) => {
  const hosting = props.hosting;
  const history = useHistory()

  const goTo = () => {
    history.push("/hosting/" + hosting._id)
  }

  return (
    <div className="card mb-3" style={styles.card} onClick={goTo}>
      <div className="row g-0" style={styles.row}>
        <div className="col-md-4">
          <img
            src={hosting.galleries[0]}
            alt="..."
            style={styles.image}
            onError={(event) => (event.target.src = NoImage)}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{hosting.title}</h5>
            <p className="card-text">
              <span>{hosting.address.street}</span>
              <br />
              <span>{hosting.address.city}</span>
            </p>
            <p className="card-text">
              <small className="text-muted">${hosting.price}/night</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Radium(MyHostingCard)


const styles = {
  image: {
    width: "100%",
    objectFit: "cover",
    height: "100%",
    borderRadius: "10px 0 0 10px",
    "@media (max-width: 773px)": {
      height: "20vh",
      borderRadius: "10px 10px 0 0",
    },
  },
  card: {
    maxWidth: "540px",
    transition: "200ms",
    margin: "0 auto",
    border: "1px solid var(--darkgrey)",
    borderRadius: "10px",
    ":hover": {
      opacity: "0.8",
      cursor: "pointer",
      transform: "scale(1.03)",
    },
  },
  row: {
    height: "100%"
  }
};