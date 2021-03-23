import { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Radium from 'radium'
import ErrorMessage from '../ErrorMessage'


function CheckoutModal(props){
  const { modal, toggle, hosting, user, guestAmount, startDate, endDate, totalPrice, setIsBooked } = props;

  const [bookingError, setBookingError] = useState(false)

  const modalOpen = () => {
    setBookingError(false)
  }
  
  const confirmBooking = async () => {
    let booking = {
      client: user,
      hosting: hosting,
      timePeriod: [startDate.getTime(), endDate.getTime()],
      guestAmount: guestAmount,
      totalPrice, totalPrice
    }
    let res = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(booking),
    });
    res = await res.json()
    console.log(res);
    if (res.error) {
      setBookingError(true)
      setTimeout(() => {
        toggle()
      }, 3000);
      return
    }
    else if (!res.error) {
      setIsBooked(true)
    }
  }

  
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} onOpened={modalOpen}> 
        <div className="modal-header" toggle={toggle}>
          <h5 className="modal-title">Checkout</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={toggle}
          ></button>
        </div>
        <ModalBody>
          <div>
            <button onClick={confirmBooking} style={styles.button}>
              type="button"
            </button>
            <ErrorMessage showMessage={bookingError} message="The date you chose is already booked, please try again with another date. Close in 3s..."/>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Radium(CheckoutModal);


const styles = {
  button: {
    backgroundColor: "var(--pink)",
    textAlign: "center",
    color: "white",
    width: "100%",
    fontWeight: "bold",
    borderRadius: "50px",
    ":focus": {
      border: "none !important",
    }
  }
}