import Radium from 'radium'

function HostingCard(props) {

  const hosting = props.hosting

  return (
    <div className="container" style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={hosting.galleries[0]} style={styles.image} />
      </div>
      <div className="container">
        <p style={styles.hostingName}>{hosting.name}</p>
        <p style={styles.hostingprice}> Price</p>
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
  hostingprice: {
    fontWeight: "bold",
  },
  hostingName: {
    padding: '0',
    margin: '0',
    color: "var(--darkgrey)",
  },
};

export default Radium(HostingCard)
