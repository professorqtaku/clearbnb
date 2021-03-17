import{ useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { UserContext } from '../../contexts/UserContextProvider'
import LoginButton from '../buttons/LoginButton'
import { addDays } from 'date-fns'
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function BookingForm(props) {
  const hosting = props.hosting
  const today = new Date();
  const tomorrow = today.setDate(today.getDate() + 1);
  const { user } = useContext(UserContext)
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalDays, setTotalDays] = useState(1);
  const [bookedDates, setBookedDates] = useState();

  const bookingSubmit = (e) => {
    e.preventDefault()
    if (!user || totalPrice <= 0) {
      return
    }
  }

  const createBooking = () => {
    const booking = {
      client: user,
      hosting: hosting,
      timePeriod: [startDate.getTime(), endDate.getTime()],
      totalPrice: totalPrice,
      guestAmount: guests
    }
  }

  const bookButton = () => {
    if (user) {
      return (
        <button className="btn" type="submit" onClick="book" style={styles.button }>Book</button>
      )
    }
      return (
        <LoginButton />
      );
  }

  const changeStartDate = (date) => {
    setStartDate(date)
    if (date >= endDate) {
      setEndDate(addDays(date,1))
    }
  }
  
  const countDays = (start, end) => {
    let diff = end - start;
    setTotalDays(Math.round(diff / 86400000));
  };

  const countPrice = (days, price) => {
    let total = days * price;
    setTotalPrice(total);
  };

  const changeGuestNumber = e => {
    if (e.target.value > hosting.guestAmount) {
      setGuests(hosting.guestAmount)
      e.target.value = hosting.guestAmount
    } else { setGuests(e.target.value) }      
  }
  
  useEffect(() => {

    setTotalPrice(hosting.price);
    countDays(startDate, endDate)
    countPrice(totalDays, hosting.price)
    }, [startDate, endDate, totalDays, guests])
  
  return (
    <div className="container" style={styles.container}>
      <form className="row" onSubmit={bookingSubmit}>
        <div className="form-group col-12 col-md-6" style={styles.formGroup}>
          <Label for="date">From</Label>
          <DatePicker
            selectsStart
            selected={startDate}
            onChange={(date) => {
              changeStartDate(date);
            }}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
          />
        </div>
        <div className="form-group col-12 col-md-6" style={styles.formGroup}>
          <Label for="date">To</Label>
          <DatePicker
            selectsEnd
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy-MM-dd"
            startDate={addDays(new Date(), 1)}
            minDate={addDays(startDate, 1)}
          />
        </div>
        <div className="form-group col-12 col-md-8" style={styles.formGroup}>
          <Label>Guests</Label>
          <input
            className="form-control"
            style={styles.input}
            type="number"
            placeholder="Guests"
            min={1}
            max={hosting.guestAmount}
            onChange={changeGuestNumber}
            required
          />
        </div>
        <div className="col-8 col-md-4 align-self-end" style={styles.center}>
          {bookButton()}
        </div>
      </form>
      <hr />
      <div>
        <span>Total price: {totalPrice}</span>
      </div>
    </div>
  );
}

const styles = {
  input: {},
  container: {
    backgroundColor: "var(--lightgrey)",
    maxWidth: "600px",
    padding: "2vw",
    borderRadius: "5px",
  },
  button: {
    backgroundColor: "var(--pink)",
    textAlign: 'center',
    color: "white",
    width: '100%',
    fontWeight: "bold",
    borderRadius: "50px",
    ":focus": {
      border: "none !important",
    }
  },
  center: {
    margin: '0 auto'
  },
  formGroup: {
    paddingTop: '10px'
  }
};
