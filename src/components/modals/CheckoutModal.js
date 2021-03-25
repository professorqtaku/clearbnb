import { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Radium from 'radium'
import BookingOverview from '../BookingOverview'
import ErrorMessage from '../ErrorMessage'


function CheckoutModal(props){
  const { modal, toggle, hosting, user, guestAmount, startDate, endDate, totalPrice, setIsBooked, totalNights } = props;

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
    if (res.error) {
      setBookingError(true)
      setTimeout(() => {
        toggle()
      }, 5000);
      return
    }
    else if (!res.error) {
      console.log("no error");
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
          <BookingOverview
            title={hosting.title}
            startDate={startDate}
            endDate={endDate}
            guests={guestAmount}
            nights={totalNights}
            totalPrice={totalPrice}
          />
          <div className="row justify-content-around mt-3">
            <button
              onClick={confirmBooking}
              style={styles.button}
              className="text-center"
              type="button"
              className="btn-btn"
              data-bs-dismiss="modal"
            >
              Confirm
            </button>
          </div>
          <ErrorMessage
            showMessage={bookingError}
            message="The date you chose is already booked, please try again with another date. This window will close in few seconds..."
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Radium(CheckoutModal);


const styles = {
  gridContainer: {
    width: "90%",
    maxWidth: "400px",
    display: "grid",
    borderRadius: "20px",
    padding: "20px",
    backgroundColor: "var(--lightgrey)",
  },
  
  button: {
    color: "white",
    width: "40%",
    minWidth: "100px",
    padding: "10px",
    backgroundColor: "var(--pink)",
    borderRadius: "50px",
    border: "none",
    transition: "200ms",
  },
  mutedText: {
    color: "var(--darkgrey)",
    width: "50px"
  }
}