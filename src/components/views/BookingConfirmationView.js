import Radium from 'radium'
import { UserContext } from '../../contexts/UserContextProvider'
import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

function BookingConfirmationView(props) {
  const { booking } = props
  // const { fetchUser } = useContext(UserContext)
  // const history = useHistory()

  console.log(booking)



  return (
    <div style={styles.gridContainer} className="container">
      <p>{ booking.hosting.title}</p>
      <p>address: {booking.hosting.address}</p>
      <p>host: { booking.hosting.host}</p>
      <p>totalPrice: { booking.totalPrice}</p>
      <p>guestAmount: { booking.guestAmount}</p>
      <p>From: { booking.timePeriod[0]}</p>
      <p>To: {booking.timePeriod[1]}</p>

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