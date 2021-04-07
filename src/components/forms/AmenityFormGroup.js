import Radium from 'radium'

function AmenityFormGroup(props) {
  const amenities = props.amenities

  const amenityCheckbox = (amenity) => {
    const checkboxId = "hosting" + amenity.description + "Checkbox"
    return (
      <div className="form-check" key={amenity.description}>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id={checkboxId}
        />
        <label className="form-check-label">
          <span className="material-icons align-self-end" style={styles.icon}>
            {amenity.icon ? amenity.icon : null}
          </span>
          {amenity.description}
        </label>
      </div>
    );
  };

  return (
    <div className="container">
      <h4 className="mb-3">Choose amenities</h4>
      <div style={styles.container}>
        {amenities ? amenities.map((amenity) => amenityCheckbox(amenity)) : null}
      </div>
    </div>
  );
}

export default Radium(AmenityFormGroup);

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridGap: "2vw",
    "@media (min-width: 400px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (min-width: 500px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (min-width: 996px)": {
      gridGap: "1vw",
      gridTemplateColumns: "repeat(5, 1fr)",
    },
  },
  icon: {
    padding: "0 5px 0 0",
  },
};