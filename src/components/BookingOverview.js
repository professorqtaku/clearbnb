export default function BookingOverview(props) {
  const { title, startDate, endDate, guests, nights, totalPrice } = props
  
  const changeDateFormat = (date) => {
    date = date.toLocaleDateString();
    return date;
  };

  return (
    <div style={styles.gridContainer} className="container overflow-hidden">
      <div className="row mb-4">
        <h3 className="text-muted">{title}</h3>
      </div>

      <div className="row mb-2">
        <h6 className="col-sm-2 mb-0">Date</h6>
        <div className="col-sm-10">
          <h6 className="col-12 d-flex justify-content-sm-end">
            <span style={styles.mutedText}>from</span>
            {changeDateFormat(startDate)}
          </h6>
          <h6 className="col-12 d-flex justify-content-sm-end">
            <span style={styles.mutedText}>to</span>
            {changeDateFormat(endDate)}
          </h6>
        </div>
      </div>

      <div className="row mb-2">
        <h6 className="col-sm-2 mb-0">Guests</h6>
        <h6 className="col-sm-10 d-flex justify-content-sm-end">
          {guests}
        </h6>
      </div>
      <div className="row mb-2">
        <h6 className="col-sm-2 mb-0">Nights</h6>
        <h6 className="col-sm-10 d-flex justify-content-sm-end">
          {nights}
        </h6>
      </div>
      <hr />
      <div className="row justify-content-around">
        <h3 className="col-2 mb-0">Total</h3>
        <h3 className="col-10 d-flex justify-content-end text-muted">
          ${totalPrice}
        </h3>
      </div>
    </div>
  );
}

const styles = {
  gridContainer: {
    width: "90%",
    maxWidth: "400px",
    display: "grid",
    borderRadius: "20px",
    padding: "20px",
    backgroundColor: "var(--lightgrey)",
  },

  button: {
    color: "white",
    width: "40%",
    minWidth: "100px",
    padding: "10px",
    backgroundColor: "var(--pink)",
    borderRadius: "50px",
    border: "none",
    transition: "200ms",
    ":hover": {
      opacity: "0.8",
      cursor: "pointer",
      transform: "scale(1.03)",
    },
  },
  mutedText: {
    color: "var(--darkgrey)",
    width: "50px",
  },
};