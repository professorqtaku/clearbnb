import { useParams } from "react-router-dom";

export default function HostingDetailPage() {
  const bookingId = useParams();

  return (
    <div className="container">
      <h1>Booking details</h1>
    </div>
  );
}

const styles = {};
