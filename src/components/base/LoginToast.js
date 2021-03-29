import { Toast, ToastBody} from "reactstrap";

const LoginToast = (props) => {
  const { show, setShow } = props;
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
            <p style={styles.text}>Login successful</p>
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

export default LoginToast;

const styles = {
  container: {
    backgroundColor: "var(--green)",
    right: "0",
    top: "12%"
  },
  text: {
    fontWeight: "bold",
    margin: "0",
    padding: "0"
  }
}
