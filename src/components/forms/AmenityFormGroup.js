import { useContext } from "react";
import Radium from 'radium'
import { AmenityContext } from "../../contexts/AmenityContextProvider";

function AmenityFormGroup() {
  const { amenities } = useContext(AmenityContext);

  const amenityCheckbox = (amenity) => {
    return (
      <div className="form-check" key={amenity.description}>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label">
          <span className="material-icons align-self-end">
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
    "@media (min-width: 600px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (min-width: 800px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    
  },
};