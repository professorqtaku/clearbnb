import { useHistory } from 'react-router-dom'
import Radium from 'radium'
import NoImage from '../../assets/img/noimage.png'


const HostingCard = (props) => {
  const hosting = props.hosting;
  const history = useHistory()

  const goTo = () => {
    history.push("/hosting/" + hosting._id)
  }

  return (
    <div className="card mb-3" style={styles.card} onClick={goTo}>
      <div className="col g-0" style={styles.row}>
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
            <div className="row-md-8">
              <p className="col-md-3 card-text">
                <span>{hosting.guestAmount} guests</span>
                <br />
                <span>{hosting.bedAmount} beds</span>
              </p>
              <p className="col-md-3 card-text">{hosting.price}/night</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Radium(HostingCard)


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