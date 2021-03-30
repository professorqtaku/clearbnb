import Radium from 'radium'
import { useContext, useState, useEffect } from 'react'
import { HostingContext } from '../../contexts/HostingContextProvider'
import LoadingScreen from "../base/Loading"

function BookingConfirmationView(props) {
  const { booking } = props
  const { hostings, fetchHostings } = useContext(HostingContext)
  const [hosting, setHosting] = useState(null)

  useEffect(() => {
    fetchHostings()
    let matchedHosting = hostings.filter((hosting) => booking.hosting._id === hosting._id)[0]
    setHosting(matchedHosting)
  }, [])

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

  const renderView = (hosting, booking) => {
    return (
      <div style={styles.gridContainer} className="container overflow-hidden">
        <div className="row mb-2">
          <h3 className="text-muted">{booking.hosting.title}</h3>
        </div>
        <div className="col-12 mb-0">
            {hosting.address.street}, {hosting.address.city}
        </div>
        <hr />
        <h6 className="col-12 mb-0">
          {showDate()}
        </h6>
        <hr />
          <div className="col-12 mb-0">Guests: {booking.guestAmount}</div>
        <hr />
        <div className="row">
          <h6 className="col-12 col-md-6">Contact host:</h6>
          <p className="col-12 mb-1">
            {hosting.host.firstName} {hosting.host.lastName}
          </p>
          <p className="col-12 mb-0">
            {hosting.host.email}
          </p>
        </div>
        <hr />
        <div className="row justify-content-around mb-0">
          <h5 className="col-2 mb-0">Total:</h5>
          <h5 className="col-10 d-flex justify-content-end text-muted mb-0">
            ${booking.totalPrice}
          </h5>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      {hosting ? renderView(hosting, booking) : <LoadingScreen />}
    </div>
  );

}

export default Radium(BookingConfirmationView)

const styles = {
  gridContainer: {
    maxWidth: "400px",
    display: "grid",
    border: "1px solid grey",
    borderRadius: "20px",
    padding: "20px",
    backgroundColor: "var(--lightgrey)"
  },

  submit: {
    color: "white",
    width: "40%",
    paddingTop: "5px",
    paddingBottom: "5px",
    backgroundColor: "var(--pink)",
    borderRadius: "20px",
    border: "none",
    marginBottom: "10px",
    transition: "200ms",
    ":hover": {
      opacity: "0.8",
      cursor: "pointer",
      transform: "scale(1.03)",
    },
  },
  input: {
    width: "100%"
  },
  link: {
    color: "var(--darkgrey)",
  },
};