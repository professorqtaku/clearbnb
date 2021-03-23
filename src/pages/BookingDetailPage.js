import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContextProvider";
import { UserContext } from "../contexts/UserContextProvider";

export default function HostingDetailPage(props) {
  const id = useParams("bookingId")


  return (
    <div className="container">
      <h1>detail</h1>
    </div>
  );
}

const styles = {

};
