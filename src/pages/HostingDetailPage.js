import { useParams, withRouter } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { HostingContext } from "../contexts/HostingContextProvider";

export default function HostingDetailPage(props) {
  const { hostingId } = useParams();
  const { hostings, fetchHostings } = useContext(HostingContext);
  const [hosting, setHosting] = useState(null)
  
  //const hosting = hostings.find(h => h.id = id)
  
  const fetchHosting = async (hostingId) => {
    let res = await fetch(`/rest/hostings/${hostingId}`)
    res = await res.json()
    setHosting(res)
  };
  

  useEffect(() => {
    console.log(hostingId);
    fetchHosting(hostingId)
  }, [hostingId]);

  useEffect(() => {
    console.log('Hosting' ,hosting);
  }, [hosting]);

  const page = (h) => {
    console.log(h._id);
    return (
      <div>
      <h2>{h.title}</h2>
        <img src={h.galleries[0]} style={styles.image} />
      <div className="row">
          <div className="col-sm-6">
            <h5>
              {h.accommodation} with {h.host.firstName}{" "}
              {h.host.lastName}
            </h5>
          </div>
          <div className="col-sm-6 col-md-12">
            <p className="col-4" style={styles.info}>
              {h.guestAmount}{" "}
              {h.guestAmount > 1 ? "Guests" : "Guest"}
            </p>

            <p className="col-4" style={styles.info}>
              {h.bedroomAmount}{" "}
              {h.bedroomAmount > 1 ? "Bedrooms" : "Bedroom"}
            </p>

            <p className="col-4" style={styles.info}>
              {h.bedAmount}{" "}
              {h.bedAmount > 1 ? "Beds" : "Bed"}
            </p>
          </div>
        <h2 className="col-md-6">$ {h.price}/night </h2>
      </div>
      <div className="row">
        <p>{h.description}</p>
      </div>
      </div>
    );
  }

  const loading = (
    <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>)
  return (
    <div className="container">
      {hosting ? (
        page(hosting)
      ) : (
          loading
      )}
       
    </div>
  );
}

const styles = {
  image: {
    width: '100%',
    height: '25vh',
    objectFit: 'cover'
  },
  info: {
    margin: '0',
    border: '1px solid black'
  }
}
