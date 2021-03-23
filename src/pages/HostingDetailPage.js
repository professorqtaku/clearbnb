import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from '../contexts/UserContextProvider'
import BookingForm from '../components/forms/BookingForm'
import ConfirmView from '../components/views/ConfirmView'
import DeleteButton from '../components/buttons/DeleteButton'
import NoImage from '../assets/img/noimage.png'

export default function HostingDetailPage(props) {
  const { hostingId } = useParams();
  const [hosting, setHosting] = useState(null);
  const [availabilities, setAvailabilities] = useState(1);
  const [bookedDates, setBookedDates] = useState(null)
  const [isBooked, setIsBooked] = useState(false)
  const { user } = useContext(UserContext)


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
        setIsBooked={setIsBooked}
      />
    );
  }

  const defaultView = (hosting, user) => {
    return (
      <div>
        <h2>{hosting.title}</h2>
        <img
          src={hosting.galleries[0]}
          alt="hosting"
          onError={event => event.target.src = NoImage}
          style={styles.image}
        />
        <div className="row">
          <div className="col-12 col-md-6">
            <h5>
              {hosting.accommodation.description} with {hosting.host.firstName}{" "}
              {hosting.host.lastName}
            </h5>
          </div>
          <p className="col-4 col-md-2" style={styles.info}>
            {hosting.guestAmount} {hosting.guestAmount > 1 ? "Guests" : "Guest"}
          </p>

          <p className="col-4 col-md-2" style={styles.info}>
            {hosting.bedroomAmount}{" "}
            {hosting.bedroomAmount > 1 ? "Bedrooms" : "Bedroom"}
          </p>

          <p className="col-4 col-md-2" style={styles.info}>
            {hosting.bedAmount} {hosting.bedAmount > 1 ? "Beds" : "Bed"}
          </p>
          <h2 className="col-md-6">$ {hosting.price}/night </h2>
        </div>
        <div className="row">
          <p>{hosting.description}</p>
        </div>
        {userView(hosting, user)}
      </div>
    );
  };

  const hostView = (hosting) => {
    return (
      <div style={styles.delete}>
        <DeleteButton hosting={hosting}/>
      </div>
    )
  }

  const loading = (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
  return (
    <div className="container">
      {hosting && availabilities ? (
        isBooked ? (
          <ConfirmView hosting={hosting} />
        ) : (
          defaultView(hosting, user)
        )
      ) : (
        loading
      )}
    </div>
  );
}

const styles = {
  image: {
    width: "100%",
    height: "calc(25vh + 10vw)",
    objectFit: "cover",
    borderRadius: "10px",
  },
  info: {
    margin: "0",
    border: "1px solid black",
  },
  delete: {
    margin: "0 auto",
    width: "50%"
  }
};
