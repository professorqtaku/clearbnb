import { useHistory } from 'react-router-dom'
import Radium from 'radium'

const MyHostingCard = (props) => {
  const hosting = props.hosting;
  const history = useHistory()

  const goTo = () => {
    history.push("/hosting/" + hosting._id)
  }

  return (
    <div class="card mb-3" style={styles.card} onClick={goTo}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={hosting.galleries[0]} alt="..." style={styles.image} />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{hosting.title}</h5>
            <p class="card-text">
              <span>{hosting.address.street}</span>
              <br />
              <span>{hosting.address.city}</span>
            </p>
            <p class="card-text">
              <small class="text-muted">${hosting.price}/night</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Radium(MyHostingCard)


const styles = {
  image: {
    width: "100%",
    objectFit: "cover",
    height: "100%",
    borderRadius: "10px 0 0 10px",
    "@media (max-width: 773px)": {
      height: "20vh",
      borderRadius: "10px 10px 0 0",
    },
  },
  card: {
    maxWidth: "540px",
    transition: "200ms",
    margin: "0 auto",
    border: "1px solid var(--darkgrey)",
    borderRadius: "10px",
    ":hover": {
      opacity: "0.8",
      cursor: "pointer",
      transform: "scale(1.03)",
    },
  },
};