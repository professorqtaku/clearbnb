import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from '../contexts/UserContextProvider'
import BookingForm from '../components/forms/BookingForm'
import ConfirmView from '../components/views/ConfirmView'
import DeleteButton from '../components/buttons/DeleteButton'
import NoImage from '../assets/img/noimage.png'
import Loading from '../components/base/Loading'

export default function HostingDetailPage(props) {
  const { hostingId } = useParams();
  const [hosting, setHosting] = useState(null);
  const [availabilities, setAvailabilities] = useState(1);
  const [bookedDates, setBookedDates] = useState(null)
  const [booking, setBooking] = useState(null)
  const { user } = useContext(UserContext)

  const customerPrice = (price) => {
    return (
      Math.round((parseInt(price * 100) * 1.15)) / 100
    )
  }

  const fetchHosting = async (hostingId) => {
    let res = await fetch(`/rest/hostings/${hostingId}`);
    try {
      res = await res.json();
      setHosting(res);
    } catch (e) {
      console.log("error", e);
    }
  };

  const fetchAvailabilites = async (hostingId) => {
    let res = await fetch(`/rest/view/availabilities/${hostingId}`);
    try {
      res = await res.json();
      setAvailabilities(res)
    }
    catch (e) {
      console.log("error", e);
    }
  }

  const fetchBookings = async (hostingId) => {
    let res = await fetch(`/rest/view/bookings/${hostingId}`);
    try {
      res = await res.json();
      if (!res.error) {
        let dates = []
        res.map((booking) => {
          let startDate = booking.timePeriod[0]
          let endDate = booking.timePeriod[1]
          while (startDate <= endDate) {
            dates.push(startDate);
            startDate += 86400000;
          }
        })
        setBookedDates(dates);
      }
    }
    catch (e) {
      console.log("error", e);
    }
  }

  useEffect(() => {
    fetchHosting(hostingId);
    fetchAvailabilites(hostingId);
    fetchBookings(hostingId)
  }, [hostingId, user]);

  const userView = (hosting, user) => {
    if (user) {
      if (hosting.host._id === user._id) {
        return hostView(hosting);
      }
    }
    return (
      <BookingForm
        hosting={hosting}
        availabilities={availabilities}
        bookedDates={bookedDates}
        setBooking={setBooking}
      />
    );
  }

  const defaultView = (hosting, user) => {
    return (
      <div style={styles.container}>
        <h2>{hosting.title}</h2>
        <img
          src={hosting.galleries[0]}
          alt="hosting"
          onError={event => event.target.src = NoImage}
          style={styles.image}
        />
        <div className="container">
          <div className="row">
            <div className="col-6 col-xs-12">
              <h5 style={{ paddingTop: "1em" }}>
                {hosting.accommodation.description} with {hosting.host.firstName}{" "}
                {hosting.host.lastName}
              </h5>
              <span style={{ paddingTop: "1em" }}>
                {hosting.guestAmount} {hosting.guestAmount > 1 ? "Guests" : "Guest"}
              </span>

              <span style={{ paddingTop: "1em" }}>
                {hosting.bedroomAmount}{" "}
                {hosting.bedroomAmount > 1 ? "Bedrooms" : "Bedroom"}
              </span>

              <span style={{ paddingTop: "1em", margin: '0 auto' }}>
                {hosting.bedAmount} {hosting.bedAmount > 1 ? "Beds" : "Bed"}
              </span>
              <p style={{ paddingTop: "1em" }}>{hosting.address.street} in {hosting.address.city} </p>
              <h2 style={{ paddingTop: "1em" }} >$ {customerPrice(hosting.price)}/night </h2>
              <p style={{ paddingTop: "1em" }}>{hosting.description}</p>
            </div>
            <div className="col-6 col-xs-12">
              {userView(hosting, user)}
            </div>
          </div>
        </div>
      </div>

    );
  };

  const hostView = (hosting) => {
    return (
      <div style={styles.delete}>
        <DeleteButton hosting={hosting} />
      </div>
    )
  }

  return (
    <div className="container" style={styles.container}>
      {hosting && availabilities ? (
        booking ? (
          <ConfirmView title={hosting.title} booking={booking} />
        ) : (
          defaultView(hosting, user)
        )
      ) : (
        <Loading />
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "var(--whiteTrans)",
    marginBottom: "5vw",
    height: "100%",
    maxWidth: "1000px"
  },
  image: {
    width: "100%",
    height: "calc(25vh + 10vw)",
    objectFit: "cover",
    borderRadius: "10px",
  },
  info: {
    margin: "0",
    borderRight: "1px solid black",
  },
  delete: {
    margin: "0 auto",
    width: "50%",
  },
};
