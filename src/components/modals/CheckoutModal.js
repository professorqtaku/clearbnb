import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";


function CheckoutModal(props){

  const {modal, toggle} = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
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
        <div> 
            <button>
                type="button" 
            </button>
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

export default CheckoutModal;
