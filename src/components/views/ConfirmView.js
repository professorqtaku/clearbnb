import { useHistory } from "react-router-dom";

export default function HostingDetailPage(props) {
  const history = useHistory()

  const goToMyPage = (path) => {
    history.push(`/mypage/${path}`)
  }

  return (
    <div className="container">
      <h1>Thank you for your reservation!</h1>
      
      <button className="btn" onClick={goToMyPage("bookings")}>My bookings</button>
    </div>
  );
}

const styles = {};
