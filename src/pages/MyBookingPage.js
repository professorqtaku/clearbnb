import { useContext, useEffect, useState } from "react";
import { BookingContext } from "../contexts/BookingContextProvider";
import { UserContext } from "../contexts/UserContextProvider";
import MyBookingCard from "../components/cards/MyBookingCard";
import Radium from "radium";
import myBookingsBackground from "../assets/img/myBookingsBackground.jpg"

const MyBookingPage = () => {
  const { bookings, fetchBookings } = useContext(BookingContext);
  const { user } = useContext(UserContext);
  const [myBookings, setMyBookings] = useState();

  useEffect(() => {
    fetchBookings()
  }, []);

  useEffect(() => {
    if (bookings && user) {
      let matchedBookings = [];
      for (let booking of bookings) {
        if (booking.client._id === user._id) {
          matchedBookings.push(booking);
        }
      }
      setMyBookings(matchedBookings);
    }
  }, [bookings]);

  const showBookingCards = (bookings) => {
    return (
      <div className="container" style={styles.cardlist}>
        {bookings.map((booking) => (
          <MyBookingCard key={booking._id} booking={booking} />
        ))}
      </div>
    );
  };

  return (
   <div className="d-flex p-2 align-items-center" style={{ backgroundImage: `url(${myBookingsBackground})`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
    <div className="" style={styles.page}>
      <h5 className="">My bookings</h5>
      {myBookings && showBookingCards(myBookings)}
    </div>
  </div>
  );
};

export default Radium(MyBookingPage);

const styles = {
  page: {
    maxwidth: "400px",
    margin: '0 auto',
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  cardlist: {
    display: "grid",
    gridTemplateColumns: "1fr",
    "@media (min-width: 1000px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: "2vw",
    },
  },
};
