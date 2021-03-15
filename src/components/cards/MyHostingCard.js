import { useHistory } from 'react-router-dom'

export default function MyHostingCard(props) {
  const hosting = props.hosting;
  const history = useHistory()

  const goTo = () => {
    history.push("/hosting/" + hosting._id)
  }

  return (
    <div class="card mb-3" style={{ maxWidth: "540px" }} onClick={goTo}>
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



const styles = {
  image: {
    width: "100%",
    objectFit: 'cover',
    height: "100%"
  },
};