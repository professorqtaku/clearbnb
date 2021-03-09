import { useParams, withRouter } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { HostingContext } from "../contexts/HostingContextProvider";

export default function HostingDetailPage(props) {
  const { id } = useParams();
  const { hostings, fetchHostings } = useContext(HostingContext);
  const [hosting, setHosting] = useState(null)
  
  const hostingData = hostings.find(h => h.id = id)

  const fetchHosting = async () => {
    await fetch(`/rest/hostings/${id}`).then(res => res.json()).then(data => setHosting(data))
  };

  useEffect(() => {
    fetchHosting()
  }, []);

  useEffect(() => {
    console.log(hosting,'Hosting');
  }, [hosting]);

  return (
    <div>
      <h1>Hosting detail</h1>
      <p>hosting: { hostingData.price} </p>
    </div>
  );
}
