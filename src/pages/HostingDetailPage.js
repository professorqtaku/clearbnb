import { useParams, withRouter } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { HostingContext } from "../contexts/HostingContextProvider";

export default function HostingDetailPage(props) {
  //const { hostingId } = useParams();
  const { hostings, fetchHostings } = useContext(HostingContext);
  const [hosting, setHosting] = useState(null)
  
  //const hostingData = hostings.find(h => h.id = id)
  
  const fetchHosting = async (hostingId) => {
    let res = await fetch(`/rest/hostings/${hostingId}`)
    res = await res.json()
    setHosting(res)
  };
  

  useEffect(() => {
    // varje gång props ändras
    console.warn(props.match.params.hostingId);
    fetchHosting(props.match.params.hostingId)
  }, [props.match.params.hostingId]);

  useEffect(() => {
    console.log('Hosting' ,hosting);
  }, [hosting]);

  const loading = (
    <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>)
  return (
    <div className="container">
      {hosting ? (
        "Hello"
      ) : (
          loading
      )}
      {/* <h2>{hostingData.title}</h2>
        <img src={hostingData.galleries[0]} style={styles.image} />
      <div className="row">
          <div className="col-sm-6">
            <h5>
              {hostingData.accommodation} with {hostingData.host.firstName}{" "}
              {hostingData.host.lastName}
            </h5>
          </div>
          <div className="col-sm-6 col-md-12">
            <p className="col-4" style={styles.info}>
              {hostingData.guestAmount}{" "}
              {hostingData.guestAmount > 1 ? "Guests" : "Guest"}
            </p>

            <p className="col-4" style={styles.info}>
              {hostingData.bedroomAmount}{" "}
              {hostingData.bedroomAmount > 1 ? "Bedrooms" : "Bedroom"}
            </p>

            <p className="col-4" style={styles.info}>
              {hostingData.bedAmount}{" "}
              {hostingData.bedAmount > 1 ? "Beds" : "Bed"}
            </p>
          </div>
        <h2 className="col-md-6">$ {hostingData.price}/night </h2>
      </div>
      <div className="row">
        <p>{hostingData.description}</p>
      </div> */}
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
