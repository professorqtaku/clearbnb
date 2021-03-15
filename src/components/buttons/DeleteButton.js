import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { Modal } from "reactstrap";
import Radium from "radium";

const DeleteButton = (props) => {
  const hosting = props.hosting
  const history = useHistory()

  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const deleteHosting = async () => {
    let res = await fetch('/rest/hostings/' + hosting._id, {
      method: "DELETE"
    })
    res = await res.json()
    console.log(res);
    if (res.success) {
      history.push("/mypage")
    }
    else if (res.error) {
      alert("Delete failed")
    }
  }

  return (
    <div>
      <button className="btn" style={styles.button} onClick={toggle}>
        Delete hosting
      </button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={styles.modal}
      >
        <div className="modal-header" toggle={toggle}>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={toggle}
          ></button>
        </div>
        <div className="modal-body mx-auto" style={styles.body}>
          <h5 className="modal-title">Do you want to delete this hosting?</h5>
          <button
            className="btn"
            style={styles.button}
            key="deleteButton"
            onClick={deleteHosting}
          >
            Delete
          </button>
          <br />
          <button className="btn" style={[{...styles.button}, {...styles.cancel}]} key="closeButton" onClick={toggle}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Radium(DeleteButton);

const styles = {
  button: {
    key: 'delete',
    backgroundColor: "var(--darkgrey)",
    color: "white",
    fontWeight: "bold",
    width: "100%",
    marginTop: '4vh',
    borderRadius: "50px",
    ":focus": {
      border: "none important",
    },
  },
  body: {
    textAlign: 'center',
    padding: '5vh 10vw',
    width: '100%'
  },
  cancel: {
    backgroundColor: 'var(--pink)'
  }
};
