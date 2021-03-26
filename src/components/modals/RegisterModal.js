import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import RegisterForm from '../forms/RegisterForm'
import Nav from '../base/Nav'

function RegisterModal(props){

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Nav content="Become member" onClick={toggle}/>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="modal-header" toggle={toggle}> <h5 className="modal-title">Register</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggle}></button>
        </div>

        <ModalBody>
          <RegisterForm toggleModal={toggle}/>
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

export default RegisterModal;
