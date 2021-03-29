import Radium from 'radium'
import { UserContext } from '../../contexts/UserContextProvider'
import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

function BookingConfirmationView(props) {
  const { toggleModal } = props
  const { fetchUser } = useContext(UserContext)
  const history = useHistory()



  return (
    <div style={styles.gridContainer} className="container">
      <p>hosting.galleries[0]</p>
      <p>hosting.title</p>
      <p>hosting.address</p>
      <p>hosting.host</p>
      <p>booking.totalPrice</p>
      <p>booking.guestAmount</p>
      <p>booking.timePeriod[0]</p>
      <p>booking.timePeriod[1]</p>

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