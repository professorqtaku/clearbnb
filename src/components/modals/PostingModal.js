import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import HostingForm from "../forms/HostingForm";

function PostingModal(props) {
  const { modal, toggle } = props;
  

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <div className="modal-header" toggle={toggle}>
          <h5 className="modal-title">Post a hosting</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={toggle}
          ></button>
        </div>
        <ModalBody>
          <HostingForm toggleModal={toggle} />
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

export default PostingModal;
