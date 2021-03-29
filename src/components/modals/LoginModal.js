import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import LoginForm from '../forms/LoginForm'

function LoginModal(props) {
  const { modal, toggle, toggleToast } = props

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
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
          <LoginForm toggleModal={toggle} toggleToast={toggleToast} />
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

export default LoginModal;
