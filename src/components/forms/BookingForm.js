import { useState, useContext, useEffect } from "react";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Label } from "reactstrap";
import { UserContext } from "../../contexts/UserContextProvider";
import LoginButton from "../buttons/LoginButton";
import { addDays, getTime } from "date-fns";
import ErrorMessage from "../ErrorMessage";
import CheckoutModal from "../modals/CheckoutModal"

export default function BookingForm(props) {
  const { hosting, availabilities, bookedDates, setBooking } = props;
  const { user } = useContext(UserContext);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalDays, setTotalDays] = useState(1);
  const [checkoutModal, setCheckoutModal] = useState(false);
  const toggleCheckout = () => setCheckoutModal(!checkoutModal);


  const bookingSubmit = (e) => {
    e.preventDefault();
    if (!user || totalPrice <= 0) {
      return;
    }
    toggleCheckout();
  };

  const changeStartDate = (date) => {
    setStartDate(date);
    if (date >= endDate) {
      setEndDate(addDays(date, 1));
    }
  };

  const countDays = (start, end) => {
    let diff = end - start;
    setTotalDays(Math.round(diff / 86400000));
  };

  const countPrice = (days, price) => {
    let total = days * price;
    setTotalPrice(total);
  };

  const changeGuestNumber = (e) => {
    if (e.target.value > hosting.guestAmount) {
      setGuests(hosting.guestAmount);
      e.target.value = hosting.guestAmount;
    } else {
      setGuests(e.target.value);
    }
  };

  const DatePickerCustomInput = forwardRef(({ value, onClick }, ref) => (
    <input className="form-control" onClick={onClick} ref={ref} value={value} />
  ));

  const disableDatePicker = () => {
    return !availabilities.length;
  };

  const availableDates = (date) => {
    for (let availability of availabilities) {
      let startTime = availability.timePeriod[0];
      let endTime = availability.timePeriod[1];
      if (getTime(date) >= startTime && getTime(date) <= endTime) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    setTotalPrice(hosting.price);
    countDays(startDate, endDate);
    countPrice(totalDays, hosting.price);
  }, [startDate, endDate, totalDays, guests]);

  return (
    <div className="container" style={styles.container}>
      <form className="row" onSubmit={bookingSubmit}>
        <div className="form-group col-12 col-md-6" style={styles.formGroup}>
          <Label>From</Label>
          <DatePicker
            selectsStart
            selected={startDate}
            onChange={(date) => {
              changeStartDate(date);
            }}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            customInput={<DatePickerCustomInput />}
            closeOnScroll={true}
            disabled={disableDatePicker()}
            filterDate={availableDates}
            excludeDates={bookedDates}
          />
        </div>
        <div className="form-group col-12 col-md-6" style={styles.formGroup}>
          <Label>To</Label>
          <DatePicker
            selectsEnd
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy-MM-dd"
            startDate={addDays(new Date(), 1)}
            minDate={addDays(startDate, 1)}
            closeOnScroll={true}
            customInput={<DatePickerCustomInput />}
            disabled={disableDatePicker()}
            filterDate={availableDates}
            excludeDates={bookedDates}
          />
        </div>
        <div
          className="form-group col-12 col-md-8 mb-3"
          style={styles.formGroup}
        >
          <Label>Guests</Label>
          <input
            className="form-control"
            type="number"
            placeholder="Guests"
            min={1}
            max={hosting.guestAmount}
            onChange={changeGuestNumber}
            required
          />
        </div>
        <div
          className="col-8 col-md-4 align-self-end mb-3"
          style={styles.center}
        >
          {user ? (
            <div>
              <button
                className="btn"
                type="submit"
                style={styles.button}
                disabled={disableDatePicker()}
              >
                Book
              </button>
              <CheckoutModal
                modal={checkoutModal}
                toggle={toggleCheckout}
                hosting={hosting}
                user={user}
                startDate={startDate}
                endDate={endDate}
                totalPrice={totalPrice}
                guestAmount={guests}
                setBooking={setBooking}
              />
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      </form>
      <ErrorMessage
        showMessage={disableDatePicker()}
        message="No dates available"
      />
      <hr />
      <div>
        <span>Total price: {totalPrice}</span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "var(--lightgrey)",
    maxWidth: "600px",
    padding: "2vw",
    borderRadius: "5px",
  },
  button: {
    backgroundColor: "var(--pink)",
    textAlign: "center",
    color: "white",
    width: "100%",
    fontWeight: "bold",
    borderRadius: "50px",
    ":focus": {
      border: "none !important",
    },
  },
  center: {
    margin: "0 auto",
  },
  formGroup: {
    paddingTop: "10px",
  },
};
