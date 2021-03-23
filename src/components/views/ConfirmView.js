import { useParams } from "react-router-dom";

export default function HostingDetailPage(props) {
  const bookingId = useParams();

  return (
    <div className="container">
      <h1>Thank you for your reservation!</h1>
    </div>
  );
}

const styles = {};
