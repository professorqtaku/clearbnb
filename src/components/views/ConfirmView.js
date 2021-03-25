import { useHistory } from "react-router-dom";
import BookingOverview from "../BookingOverview"

export default function ConfirmView(props) {
  const { title, booking } = props
  const history = useHistory()

  const goToMyPage = (event) => {
    history.push(`/mypage/${event.target.value}`);
  }

  return (
    <div className="container mx-auto" style={styles.container}>
      <h1 className="mb-3" style={styles.textCenter}>Thank you for your reservation!</h1>

      <BookingOverview
        title={title}
        startDate={new Date(booking.timePeriod[0])}
        endDate={new Date(booking.timePeriod[1])}
        guests={booking.guestAmount}
        totalPrice={booking.totalPrice}
      />
      <div style={styles.textCenter} className="mt-3">
        <button className="btn m-3" style={styles.button} key={title} onClick={goToMyPage} value="bookings">
          My bookings
        </button>
        <button className="btn m-3" style={styles.button} key={title} onClick={goToMyPage} value="">
          My page
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "600px",
  },
  button: {
    color: "white",
    width: "100%",
    maxWidth: "200px",
    padding: "10px",
    backgroundColor: "var(--pink)",
    borderRadius: "50px",
    border: "none",
    transition: "200ms",
    ":hover": {
      opacity: "0.8",
      cursor: "pointer",
      transform: "scale(1.03)",
    },
  },
  textCenter: {
    textAlign: "center"
  }
};
