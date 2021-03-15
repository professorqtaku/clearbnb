import{ useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, FormGroup, Label } from 'reactstrap'
import { UserContext } from '../../contexts/UserContextProvider'
import LoginButton from '../buttons/LoginButton'
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function BookingForm(props) {
  const hosting = props.hosting
  const today = new Date();
  const tomorrow = today.setDate(today.getDate() + 1);
  const { user } = useContext(UserContext)
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState("");

  const bookingSubmit = (e) => {
    e.preventDefault()
    if (!user) {
      return
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

  return (
    <div className="container" style={styles.container}>
      <form className="row" onSubmit={bookingSubmit}>
        <div className="form-group col-12 col-md-6">
          <Label for="date">From</Label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
          />
        </div>
        <div className="form-group col-12 col-md-6">
          <Label for="date">To</Label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <div className="form-group col-6">
          <input
            style={styles.input}
            onChange={(event) => setGuests(event.target.value)}
            placeholder="Guests"
          />
        </div>
        <div className="col-6">{bookButton()}</div>
      </form>
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
  },
  container: {
    backgroundColor: 'var(--lightgrey)',
    maxWidth: '600px',
    padding: '2vw',
    borderRadius: '5px'
  }
};
