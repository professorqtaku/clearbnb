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
    <form style={padding} onSubmit={goToSearchPage}>
      <div className="form-group">
        <div className="col">
          <input className="form-control" type="text" placeholder="location" onChange={event => setLocation(event.target.value)} required />
        </div>
        <div className="form-group row">
          <div className="col">From
        <DatePicker className="form-control" selected={startDate} onChange={date => setStartDate(date)} />
          </div>
          <div className="col">To
        <DatePicker className="form-control" selected={endDate} onChange={date => setEndDate(date)} />
          </div>
        </div>
        <div className="form-group row">
          <div className="col">
            <input className="form-control" type="text" placeholder="Guests" onChange={event => setGuests(event.target.value)} />
          </div>
          <div className="col">
            <button className="form-control" type="submit">Search</button>
          </div>
        </div>
      </div>
    </form >
  )
}

const padding = {
  marginTop: "3vh"
}