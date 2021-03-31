import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import BookingConfirmationView from "../views/BookingConfirmationView"

function BookingModal(props) {
  const {
    modal,
    toggle,
    booking
  } = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="modal-header" toggle={toggle}>
          <h5 className="modal-title">Booking Confirmation</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={toggle}
          ></button>
        </div>
        <ModalBody>
          <BookingConfirmationView
            booking={booking}
          />
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

export default BookingModal;
