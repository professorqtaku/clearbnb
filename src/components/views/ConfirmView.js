import { useHistory } from "react-router-dom";

export default function ConfirmView(props) {
  const {title} = props

  const goToMyPage = (e) => {
    console.log(e.target.value);
    console.log("mybookings button pushed");
    // history.push(`/mypage/${path}`)
  }

  return (
    <div className="container">
      <h1>Thank you for your reservation!</h1>

      <button className="btn" key={title} onClick={goToMyPage} value="bookings">My bookings</button>
    </div>
  );
}

const styles = {};
