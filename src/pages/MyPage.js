import { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'
import { HostingContext } from '../contexts/HostingContextProvider'
import { BookingContext } from '../contexts/BookingContextProvider'
import PostingModal from '../components/modals/PostingModal'
import myPageBackground from "../assets/img/myPageBackground.jpg"

export default function MyPage() {
  const history = useHistory()
  const { user } = useContext(UserContext)
  const { fetchHostings } = useContext(HostingContext)
  const { bookings, fetchBookings } = useContext(BookingContext)
  const [postModal, setPostModal] = useState()
  const togglePostModal = () => setPostModal(!postModal)

  useEffect(() => {
    fetchHostings()
    fetchBookings()
    console.log(bookings, "bookings");
  }, [])

  const goTo = (e) => {
    if (e.target.value === "search") {
      history.push("/")
    }
    else {
      history.push("/mypage/" + e.target.value)
    }
  }

  const loading = () => (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )

  const userView = (
    <div className="d-flex p-2 align-items-center" style={{ backgroundImage: `url(${myPageBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', height: "60vh",}}>
    <div className="container text-center">
      <div className="d-grid gap-2" style={styles.wrapper}>
        <h1>My Page</h1>
        <button
          className="btn btn-primary"
          type="button"
          style={styles.btn}
          value="bookings"
          onClick={goTo}
        >
          My bookings
        </button>
        <button
          className="btn btn-primary"
          type="button"
          style={styles.btn}
          value="hostings"
          onClick={goTo}
        >
          My hostings
        </button>
        <button className="btn btn-primary"onClick={togglePostModal} style={styles.btn}>
          Post a hosting
        </button>
        <PostingModal modal={postModal} toggle={togglePostModal} />
        <button
          className="btn btn-primary"
          type="button"
          style={styles.btn}
          value="search"
          onClick={goTo}
        >
          Search places
        </button>
      </div>
    </div>
    </div>
  );

  return (
    user ? userView : loading
  )
}

const styles = {
  btn: {
    backgroundColor: 'var(--pink)',
    border: 'none',
    padding: '20px 0',
    margin: '1vh 0',
    width: '100%',
    borderRadius: '50px',
    boxShadow: '2px 3px 5px grey',
  },
  wrapper: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
}