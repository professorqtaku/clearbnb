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
      console.log(matchedBookings);
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
    <div className="d-flex p-2 align-items-center" style={{ backgroundImage: `url(${myBookingsBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
      <div className="" style={styles.page}>
        <h5 className="">My Bookings</h5>
        {myBookings && showBookingCards(myBookings)}
      </div>
    </div>
  );
};

export default Radium(MyBookingPage);

const styles = {
  page: {
    maxwidth: "400px",
    margin: "0 auto",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "var(--whiteTrans)",
  },
  cardlist: {
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "var(--whiteTrans)",
    display: "grid",
    gridGap: "3vh",
    gridTemplateColumns: "1fr",
    "@media (min-width: 1000px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
};
