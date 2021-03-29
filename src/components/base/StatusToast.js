import { Toast, ToastBody} from "reactstrap";

export default function StatusToast(props){
  const { show, setShow, content } = props;
  const toggle = () => setShow(!show)

  return (
    <div>
      <Toast
        isOpen={show}
        className="position-fixed translate-middle-y p-1"
        style={styles.container}
      >
        <div class="d-flex">
          <ToastBody>
            <p style={styles.text}>{content}</p>
          </ToastBody>
          <button
            type="button"
            class="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={toggle}
          ></button>
        </div>
      </Toast>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "var(--green)",
    right: "0",
    top: "12%"
  },
  text: {
    fontWeight: "bold",
    margin: "0",
    padding: "0",
    color: "white"
  }
}
