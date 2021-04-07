import Radium from 'radium'
import noimage from '../../assets/img/noimage.png'

function CityCard(props) {

  const city = props.city

  return (
    <div className="container" style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={city.imageUrl} alt={noimage} style={styles.image} />
      </div>
      <div className="container">
        <p style={styles.visitNow}>VISIT NOW</p>
        <p style={styles.city}> {city.name}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    border: "2px solid var(--darkgrey)",
    display: "grid",
    gridTemplateColumns: "2fr 3fr",
    padding: "0",
    borderRadius: "10px",
    transition: '200ms',
    ":hover": {
      opacity: "0.8",
      cursor: "pointer",
      transform: "scale(1.03)",
    },
    height: '100px'
  },
  image: {
    width: "100%",
    borderRadius: "10px 0 0 10px",
    objectFit: "cover",
    height: "100%",
  },
  imageContainer: {},
  city: {
    fontWeight: "bold",
  },
  visitNow: {
    padding: '0',
    margin: '0',
    color: "var(--darkgrey)",
  },
};

export default Radium(CityCard)
