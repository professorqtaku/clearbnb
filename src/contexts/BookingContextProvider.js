import { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

export default function BookingContextProvider(props) {
  const [bookings, setBookings] = useState();

  const fetchBookings = async () => {
    let docs = await fetch("/rest/bookings");
    docs = await docs.json();
    setBookings(docs);
  };

  useEffect(() => {
    fetchBookings();
    console.log(bookings);
  }, []);

  const addBooking = async (booking) => {
    let res = await fetch("/rest/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    });
    res = await res.json();
    booking.id = res.id;
    let newBookings = [...bookings, ...booking];
    setBookings(newBookings);
  };

  const values = {
    bookings,
    addBooking,
    fetchBookings,
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
}
