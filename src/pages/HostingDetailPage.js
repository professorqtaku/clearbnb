import { useParams } from "react-router-dom";
import Radium from "radium";
import { useEffect, useState, useContext } from "react";
import { UserContext } from '../contexts/UserContextProvider'
import BookingForm from '../components/forms/BookingForm'
import ConfirmView from '../components/views/ConfirmView'
import DeleteButton from '../components/buttons/DeleteButton'
import NoImage from '../assets/img/noimage.png'
import Loading from '../components/base/Loading'

function HostingDetailPage(props) {
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
    }
  };

  const fetchAvailabilites = async (hostingId) => {
    let res = await fetch(`/rest/view/availabilities/${hostingId}`);
    try {
      res = await res.json();
      setAvailabilities(res)
    }
    catch (e) {
    }
  }

  const fetchBookings = async (hostingId) => {
    let res = await fetch(`/rest/view/bookings/${hostingId}`);
    try {
      res = await res.json();
      if (!res.error) {
        let dates = []
        for (let booking of res) {
          let startDate = booking.timePeriod[0]
          let endDate = booking.timePeriod[1]
          while (startDate <= endDate) {
            dates.push(startDate);
            startDate += 86400000;
          }
        }
        setBookedDates(dates);
      }
    }
    catch (e) {
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
  const hostView = (hosting) => {
    return (
      <div style={styles.delete}>
        <DeleteButton hosting={hosting} />
      </div>
    )
  }

  const defaultView = (hosting, user) => {
    return (
      <div
        style={{
          backgroundImage: `url(${hosting.galleries[0]})`,
          height: "100%",

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          ...styles.containerPadding
        }}
        className="container-fluid"
      >
        <div style={styles.container} className="container">
          <h2 className="mb-3">{hosting.title}</h2>
          <img
            className="mb-3"
            src={hosting.galleries[0]}
            alt="hosting"
            onError={(event) => (event.target.src = NoImage)}
            style={styles.image}
          />
          <div className="container m-0">
            <div className="row">
              <h6 className="col-12 mb-2">
                {hosting.accommodation.description} with{" "}
                {hosting.host.firstName} {hosting.host.lastName}
              </h6>

              <div className="col-12 mb-2 text-muted">
                <span>
                  {hosting.guestAmount}{" "}
                  {hosting.guestAmount > 1 ? "Guests" : "Guest"}
                </span>
                <span>
                  {" "}
                  | {hosting.bedroomAmount}{" "}
                  {hosting.bedroomAmount > 1 ? "Bedrooms" : "Bedroom"}
                </span>
                <span>
                  {" "}
                  | {hosting.bedAmount} {hosting.bedAmount > 1 ? "Beds" : "Bed"}
                </span>
              </div>
              <p className="col-12">
                {hosting.address.street}, {hosting.address.city}{" "}
              </p>
              <h3 className="col-12 mb-3">
                $ {customerPrice(hosting.price)}/night{" "}
              </h3>
              <p className="col-12">{hosting.description}</p>
              <hr />
              <div className="col-12 mt-4">
                <div>{userView(hosting, user)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  return (
    <div
      className="container-fluid"
      key="detailContainer"
      style={styles.containerFluid}
    >
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

export default Radium(HostingDetailPage)

const styles = {
  containerPadding: {
    '@media (min-width: 700px)': {
      padding: '3vh 0'
    }
  },
  containerFluid: {
    height: "100%",
    padding: "0",
  },
  container: {
    padding: "4vh 2vh",
    borderRadius: "10px",
    backgroundColor: "rgba(255,255,255,0.9)",
    height: "100%",
    maxWidth: "900px",
    margin: "0 auto",
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
