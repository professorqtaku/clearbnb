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
            <div className="row justify-content-around">
              <div className="col">
                <p>
                  Total: <br />
                  <small className="text-muted">${totalPrice}</small>
                </p>
              </div>

              <div className="col-7 col-md-6">
                <p>
                  Date: <br />
                  <small className="text-muted">
                    from {changeDateFormat(startDate)}
                  </small>
                  <br />
                  <small className="text-muted">
                    to {changeDateFormat(endDate)}
                  </small>
                </p>
              </div>
            </div>
            <div className="row justify-content-around p-1">
              <div className="col">
                Guests: <br />
                <small className="text-muted">{guestAmount}</small>
              </div>
              <div className="col-7 col-md-6">
                Nights: <br />
                <small className="text-muted">{totalNights}</small>
              </div>
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
    paddingTop: "5px",
    paddingBottom: "5px",
    backgroundColor: "var(--pink)",
    borderRadius: "20px",
    border: "none",
    transition: "200ms",
    ":hover": {
      opacity: "0.8",
      cursor: "pointer",
      transform: "scale(1.03)",
    }
  }
}