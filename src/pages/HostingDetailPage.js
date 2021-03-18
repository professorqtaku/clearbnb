import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import BookingForm from '../components/forms/BookingForm'
import { UserContext } from '../contexts/UserContextProvider'
import DeleteButton from '../components/buttons/DeleteButton'

export default function HostingDetailPage(props) {
  const { hostingId } = useParams();
  const [hosting, setHosting] = useState(null);
  const { user } = useContext(UserContext)


  const fetchHosting = async (hostingId) => {
    let res = await fetch(`/rest/hostings/${hostingId}`);
    res = await res.json();
    setHosting(res);
  };

  const userView = (hosting, user) => {
    if (user) {
      if (hosting.host._id === user._id) {
        return hostView(hosting);
      }
    }
    return <BookingForm hosting={hosting} />;
  }

  useEffect(() => {
    fetchHosting(hostingId);
  }, [hostingId]);

  const defaultView = (hosting, user) => {
    return (
      <div>
        <h2>{hosting.title}</h2>
        <img
          src={hosting.galleries[0]}
          alt={hosting.galleries[0]}
          style={styles.image}
        />
        <div className="row">
          <div className="col-sm-6">
            <h5>
              {hosting.accommodation.description} with {hosting.host.firstName}{" "}
              {hosting.host.lastName}
            </h5>
          </div>
          <p className="col-4 col-sm-2" style={styles.info}>
            {hosting.guestAmount} {hosting.guestAmount > 1 ? "Guests" : "Guest"}
          </p>

          <p className="col-4 col-sm-2" style={styles.info}>
            {hosting.bedroomAmount}{" "}
            {hosting.bedroomAmount > 1 ? "Bedrooms" : "Bedroom"}
          </p>

          <p className="col-4 col-sm-2" style={styles.info}>
            {hosting.bedAmount} {hosting.bedAmount > 1 ? "Beds" : "Bed"}
          </p>
          <h2 className="col-md-6">$ {hosting.price}/night </h2>
        </div>
        <div className="row">
          <p>{hosting.description}</p>
        </div>
        { userView(hosting, user) }
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
  return <div className="container">
    {hosting ? defaultView(hosting, user) : loading}
  </div>;
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
