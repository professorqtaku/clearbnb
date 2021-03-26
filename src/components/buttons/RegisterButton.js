import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import RegisterForm from "../forms/RegisterForm";
import Radium from 'radium'

const RegisterButton = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="btn" style={styles.button} onClick={toggle}>Register</button>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="modal-header" toggle={toggle}>
         <h5 className="modal-title">Register</h5>
         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggle}></button>
        </div>
        <ModalBody>
          <RegisterForm toggleModal={toggle} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}> Close </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Radium(RegisterButton);

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