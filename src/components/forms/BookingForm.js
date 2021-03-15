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
    if (!user) {
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
        <button className="btn" type="submit" onClick="book">Book</button>
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
  
  useEffect(() => {
      
      countDays(startDate, endDate)
    }, [startDate, endDate])
  
  return (
    <div className="container" style={styles.container}>
      <form className="row" onSubmit={bookingSubmit}>
        <div className="form-group col-12 col-md-6">
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
        <div className="form-group col-12 col-md-6">
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
        <div className="form-group col-12 col-md-8">
          <Label>Guests</Label>
          <Input
            style={styles.input}
            type="number"
            placeholder={1}
            min={1}
            onChange={(e) => {
              e.target.value > hosting.maxGuests
                ? setGuests(hosting.maxGuests)
                : setGuests(e.target.value);
            }}
          />
        </div>
        <div className="col-8 col-md-4 align-self-end" style={styles.button}>
          {bookButton()}
        </div>
      </form>
    </div>
  );
}

const styles = {
  input: {
  },
  container: {
    backgroundColor: 'var(--lightgrey)',
    maxWidth: '600px',
    padding: '2vw',
    borderRadius: '5px'
  },
  button:{
    
  }
};
