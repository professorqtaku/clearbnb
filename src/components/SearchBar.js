import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function SearchBar(props) {

  const setIsSearch = props.setIsSearch

  const goToSearchPage = (event) => {
    event.preventDefault()

    const urlSearch = [{
      location: `${location}`,
      startDate: (`${startDate.getDay()}` + `${startDate.getDate()}` + `${startDate.getFullYear()}`),
      endDate: (`${endDate.getDay()}` + `${endDate.getDate()}` + `${endDate.getFullYear()}`),
      guests: `${guests}`,
    }]

    localStorage.setItem("search", `${JSON.stringify(urlSearch)}`);
    setIsSearch(true)
  }

  const [location, setLocation] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState('')

  return (
    <form style={{ margin: "0 auto 0" }} onSubmit={goToSearchPage}>
      <div className="container" style={styles.container}>
        <div className="row">

          <div className="col-md-3 col-lg-4">
            <label>Location</label>
            <input className="form-control" type="text" placeholder="location" onChange={event => setLocation(event.target.value)} required />
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <label>From</label>
            <DatePicker className="form-control" selected={startDate} onChange={date => setStartDate(date)} />
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <label>To</label>
            <DatePicker className="form-control" selected={endDate} onChange={date => setEndDate(date)} />
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <label>Guests</label>
            <input className="form-control" type="text" placeholder="Guests" onChange={event => setGuests(event.target.value)} />
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <label></label>
            <button style={styles.button }className="form-control" type="submit">Search</button>
          </div>

        </div>
      </div>
    </form >
  )
}

const styles = {
  container: {
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  button: {
    color: "white",
    backgroundColor: "#4CAF50",
    textDecoration: "none"
  }
}
