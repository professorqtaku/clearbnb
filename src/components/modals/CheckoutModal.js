import { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Radium from 'radium'
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
      setIsBooked(true)
    }
  }

  const changeDateFormat = (date) => {
    date = date.toLocaleDateString()
    return date
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
          <div
            style={styles.gridContainer}
            className="container overflow-hidden"
          >
            <div className="row mb-4">
              <h3 className="text-muted">{hosting.title}</h3>
            </div>

            <div className="row mb-2">
              <h6 className="col-sm-2 mb-0">Date</h6>
              <div className="col-sm-10">
                <h6 className="col-12 d-flex justify-content-sm-end">
                  <span style={styles.mutedText}>from</span>
                  {changeDateFormat(startDate)}
                </h6>
                <h6 className="col-12 d-flex justify-content-sm-end">
                  <span style={styles.mutedText}>to</span>
                  {changeDateFormat(endDate)}
                </h6>
              </div>
            </div>

            <div className="row mb-2">
              <h6 className="col-sm-2 mb-0">Guests</h6>
              <h6 className="col-sm-10 d-flex justify-content-sm-end">
                {guestAmount}
              </h6>
            </div>
            <div className="row mb-2">
              <h6 className="col-sm-2 mb-0">Nights</h6>
              <h6 className="col-sm-10 d-flex justify-content-sm-end">
                {totalNights}
              </h6>
            </div>
            <hr />
            <div className="row justify-content-around">
              <h3 className="col-2 mb-0">Total</h3>
              <h3 className="col-10 d-flex justify-content-end text-muted">
                ${totalPrice}
              </h3>
            </div>

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
              message="The date you chose is already booked, please try again with another date. Close in 3s..."
            />
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
    ":hover": {
      opacity: "0.8",
      cursor: "pointer",
      transform: "scale(1.03)",
    }
  },
  mutedText: {
    color: "var(--darkgrey)",
    width: "50px"
  }
}