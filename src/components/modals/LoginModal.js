import { useContext } from "react";
import { LoginModalContext } from "../../contexts/LoginModalContextProvider"
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import LoginForm from '../forms/LoginForm'

function LoginModal(props) {
  const { toggleLoginModal, showLoginModal } = useContext(LoginModalContext);
  const { toggleToast } = props

  return (
    <div>
      <Modal isOpen={showLoginModal}>
        <div className="modal-header">
          <h5 className="modal-title">Log in</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={toggleLoginModal}
          ></button>
        </div>
        <ModalBody>
          <LoginForm toggleModal={toggleLoginModal} toggleToast={toggleToast} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleLoginModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LoginModal;
