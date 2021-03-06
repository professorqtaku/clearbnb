import Radium from "radium";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from 'date-fns'
import DatePickerCustomInput from './DatePickerCustomInput'

function SearchBar(props) {

  const [location, setLocation] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState('')

  const changeStartDate = (date) => {
    setStartDate(date)
    if (date >= endDate) {
      setEndDate(addDays(date, 1))
    }
  }

  const setIsSearch = props.setIsSearch
  const goToSearchPage = (event) => {
    event.preventDefault()
    const urlSearch = [{
      location: `${location}`,
      startDate: (`${startDate.getTime()}`),
      endDate: (`${endDate.getTime()}`),
      guests: `${guests}`,
    }]
    localStorage.setItem("search", `${JSON.stringify(urlSearch)}`);
    setIsSearch(JSON.stringify(urlSearch))
  }

  return (
    <form style={{ margin: "0 auto 0" }} onSubmit={goToSearchPage}>
      <div className="container" style={styles.container}>
        <div className="row">
          <div className=" col-lg-4">
            <label>Location</label>
            <input
              style={styles.noBorder}
              className="form-control"
              type="text"
              placeholder="Location"
              onChange={(event) => setLocation(event.target.value)}
              required
            />
          </div>

          <div className="col-sm-6 col-lg-2">
            <label>From</label>
            <DatePicker
              className="datePicker form-control"
              selectsStart
              selected={startDate}
              onChange={(date) => {
                changeStartDate(date);
              }}
              dateFormat="yyyy-MM-dd"
              customInput={<DatePickerCustomInput />}
              minDate={new Date()}
            />
          </div>

          <div className="col-sm-6 col-lg-2">
            <label>To</label>
            <DatePicker
              className="datePicker form-control"
              selectsEnd
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              customInput={<DatePickerCustomInput />}
              startDate={addDays(new Date(), 1)}
              minDate={addDays(startDate, 1)}
            />
          </div>

          <div className="col-6 col-lg-2">
            <label>Guests</label>
            <input
              style={styles.noBorder}
              className="form-control"
              type="text"
              placeholder="Guests"
              onChange={(event) => setGuests(event.target.value)}
            />
          </div>

          <div className="col-6 col-lg-2">
            <label></label>
            <button
              style={styles.button}
              className="form-control"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Radium(SearchBar)

const styles = {
  container: {
    maxWidth: '950px',
    fontFamily: 'var(--fontQuickSand)',
    fontWeight: 'regular',
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "var(--whiteTrans)",
    '@media (min-width: 700px) AND (max-width: 990px)': {
      maxWidth: "500px"
    },
  },

  button: {
    color: "white",
    backgroundColor: "var(--green)",
    textDecoration: "none",
  },

  noBorder: {
    borderStyle: 'none'
  }
}
