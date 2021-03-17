import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import LoginForm from "../forms/LoginForm";
import Radium from 'radium'

const ModalExample = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="btn" style={styles.button} onClick={toggle}>Log in</button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <div className="modal-header" toggle={toggle}>
          <h5 className="modal-title">Log in</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={toggle}
          ></button>
        </div>
        <ModalBody>
          <LoginForm toggleModal={toggle} />
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

export default Radium(ModalExample);

const styles = {
  button: {
    backgroundColor: 'var(--pink)',
    color: 'white',
    fontWeight: 'bold',
    width: '100%',
    borderRadius: '50px',
    ':focus': {
      border: 'none !important'
    }
  }
}