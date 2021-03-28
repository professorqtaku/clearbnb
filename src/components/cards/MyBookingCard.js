import {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import Radium from "radium";
import NoImage from "../../assets/img/noimage.png";

const MyBookingCard = (props) => {
  const booking = props.booking;
  const history = useHistory();
  const customerPrice= Math.round((parseInt(booking.totalPrice) *1.15))

  const goTo = () => {
    history.push("/booking/" + booking._id);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const showDate = () => {
    let startDate = new Date(booking.timePeriod[0])
    let endDate = new Date(booking.timePeriod[1])
    startDate = startDate.getDate() + ' ' + capitalizeFirstLetter(startDate.toLocaleString("default", { month: "long" }))
    endDate = endDate.getDate() + ' ' + capitalizeFirstLetter(endDate.toLocaleString("default", { month: "long" }))

    return (
      startDate + ' - ' + endDate
    );
  }

  return (
    <div className="card mb-3" style={styles.card} onClick={goTo}>
      <div className="row g-0" style={styles.row}>
        <div className="col-md-4">
          <img
            src={booking.hosting.galleries[0]}
            alt="..."
            style={styles.image}
            onError={(event) => (event.target.src = NoImage)}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{booking.hosting.title}</h5>
            <h6 className="card-title">
              {showDate()}
            </h6>
            <p className="card-text">
              ${customerPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radium(MyBookingCard);

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
    height: "100%",
  },
};
