import { useHistory } from 'react-router-dom'
import Radium from 'radium'
import NoImage from '../../assets/img/noimage.png'


const HostingCard = (props) => {
  const hosting = props.hosting;
  const className = props.className
  const history = useHistory()
  const customerPrice= Math.round((parseInt(hosting.price) *1.15))

  const goTo = () => {
    history.push("/hosting/" + hosting._id)
  }

  return (

    <div className="card container" style={styles.card} onClick={goTo}>
      <div className="row" style={styles.row}>
        <div className="col-12 col-md-5 col-lg-5 p-0">
          <img
            src={hosting.galleries[0]}
            alt="..."
            style={styles.image}
            onError={(event) => (event.target.src = NoImage)}
          />
        </div>

        <div className="card-body col-12 col-md-7 col-lg-7 ">
          <div className="row">
            <h5 className="col-12 card-title">{hosting.title}</h5>
            <p style={styles.font} className="col-6 card-text">{JSON.stringify(hosting.address.city)}</p>
            <p style={styles.font} className="col-12 card-text">{hosting.guestAmount} guests</p>
            <p style={styles.price} className="col-6 d-flex justify-content-end card-text">${customerPrice}/night</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Radium(HostingCard)


const styles = {
  card: {
    width: "100%",
    transition: "200ms",
    borderRadius: "10px",
    ":hover": {
      opacity: "0.8",
      cursor: "pointer",
      transform: "scale(1.03)",
    },
  },
  image: {
    width: "100%",
    objectFit: "cover",
    height: "170px",
    borderRadius: "10px 0 0 10px",
    "@media (max-width: 767px)": {
      borderRadius: "10px 10px 0 0",
    },
    "@media (min-width: 1000px)": {
      width: "180px",
      height: "100%",
    },
  },

  font: {
    color: "rgb(70,70,70)"
  },
  
  price: {
    fontSize: "18px",
    fontWeight: "500",
    color: "rgb(70,70,70)",
    width: "100%"
    
  }
};