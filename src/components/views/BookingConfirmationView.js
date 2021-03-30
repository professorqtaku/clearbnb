import Radium from 'radium'
import { UserContext } from '../../contexts/UserContextProvider'
import { useContext, useState, useEffect } from 'react'
import { HostingContext } from '../../contexts/HostingContextProvider'
import { useHistory } from 'react-router-dom'
import LoadingScreen from "../base/Loading"

function BookingConfirmationView(props) {
  const { booking } = props
  const { hostings, fetchHostings } = useContext(HostingContext)
  const [hosting, setHosting] = useState(null)

  useEffect(() => {
    fetchHostings()
    let matchedHosting = hostings.filter((hosting) => booking.hosting._id === hosting._id)[0]
    console.log(matchedHosting)
    console.log(booking)
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
      <div className="container" style={styles.gridContainer}>
        <div className="row">
          <div className="col">
            <p>{booking.hosting.title}</p>
            <div className="col">
              <p>
                <span>{showDate()}</span>
                <span>, {hosting.address.street}, {hosting.address.city}</span>
              </p>
            </div>
          </div>
          <div className="col">
            <p>Contact host:</p>
            <p>{hosting.host.firstName} {hosting.host.lastName}</p>
            <p>{hosting.host.email}</p>
            <br></br>
            <p>totalPrice: {booking.totalPrice}</p>
          </div>
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
    width: "90%",
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