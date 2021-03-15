import{ useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, FormGroup, Label } from 'reactstrap'
import { UserContext } from '../../contexts/UserContextProvider'
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function BookingForm() {
  const history = useHistory();
  const { user } = useContext(UserContext)
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState("");

  const bookButton = () => {
    if (user) {
      return (
        <button className="btn" type="submit" onClick="book">Book</button>
      )
    }
      return (
        <button className="btn bg-light" type="submit" onClick="login">
          Login
        </button>
      );
  }

  return (
    <div className="container" style={styles.container}>
      <form className="row">
        <div className="form-group col-6">
          <Label for="date">From</Label>
          <DatePicker
            style={styles.datePicker}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="form-group col-6">
          <Label for="date">To</Label>
          <DatePicker
            style={styles.datePicker}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
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
        <FormGroup></FormGroup>
      </form>
    </div>
  );
}

const styles = {
  gridContainer: {
    marginTop: "50px",
    display: "grid",
    gridTemplateRows: "3fr",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "10px",
  },

  input: {
    width: "100%",
  },
  datePicker: {
    width: "100%",
  },
  container: {
    backgroundColor: 'var(--lightgrey)'
  }
};
