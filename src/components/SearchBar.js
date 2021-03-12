import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function SearchBar() {

  const history = useHistory()
  const goToSearchPage = () => {

    const urlSearch = [{
      location: `${location}`,
      startDate: (`${startDate.getDay()}` + `${startDate.getDate()}` + `${startDate.getFullYear()}`),
      endDate: (`${endDate.getDay()}` + `${endDate.getDate()}` + `${endDate.getFullYear()}`),
      guests: `${guests}`,
    }]

    localStorage.setItem("search", `${JSON.stringify(urlSearch)}`);
    history.push('/search/')
  }

  const [location, setLocation] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState('')
  
  return (
    <div style={styles.gridContainer}>
      <div style={styles.location}>
        <input style={styles.input} onChange={event => setLocation(event.target.value)} placeholder="location"/>
      </div>
      <div style={styles.gridItem}>From
        <DatePicker style={styles.datePicker} selected={startDate} onChange={date => setStartDate(date)} />
      </div>
      <div style={styles.gridItem}>To
        <DatePicker style={styles.datePicker} selected={endDate} onChange={date => setEndDate(date)} />
      </div>
      <div style={styles.gridItem}>
        <input style={styles.input} onChange={event => setGuests(event.target.value)} placeholder="Guests"/>
      </div>
      <div style={styles.gridItem}>
        <button style={styles.input} onClick={goToSearchPage} >Search</button>
      </div>
    </div> 
  )
}

const styles = {
  gridContainer: {
    marginTop: '50px',
    // backgroundColor: 'rgba(255, 255, 255, 0.73)',
    display: 'grid',
    gridTemplateRows: '3fr',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '10px'
  },

  input: {
    width: '100%'
  },

  location: {
    gridArea: '1/1/2/3'
  },

  datePicker: {
    width: '100%'
  }
}

