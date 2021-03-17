import {Form} from "reactstrap";
import { useContext } from "react";
import Radium from 'radium'
import { AccommodationContext } from "../../contexts/AccommodationContextProvider";
import { AmenityContext } from "../../contexts/AmenityContextProvider";

import AddressFormGroup from "./AddressFormGroup";
import HostingInfoFormGroup from "./HostingInfoFormGroup";
import AmenityFormGroup from "./AmenityFormGroup";

function HostingForm() {
  const { accommodations } = useContext(AccommodationContext);
  const { amenities } = useContext(AmenityContext);

  const submitHosting = (e) => {
    let hosting = {
      amenities: []
    }
    e.preventDefault();
    amenities.map(
      (amenity) =>
        document.getElementById("hosting" + amenity.description + "Checkbox").checked ?
          hosting.amenities.push(amenity) : null);
  };

  return (
    <div className="container mb-3" style={styles.container}>
      <Form onSubmit={submitHosting}>
        <HostingInfoFormGroup accommodations={accommodations} />
        <AddressFormGroup />
        <AmenityFormGroup amenities={amenities} />
        <div className="mb-5 mt-5" style={styles.buttonContainer}>
          <button
            className="btn align-self-center"
            type="submit"
            style={styles.button}
          >
            Post a hosting
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Radium(HostingForm) 

const styles = {
  container: {
    backgroundColor: "var(--lightgrey)",
    padding: "2vw",
    borderRadius: "10px",
  },
  button: {
    backgroundColor: "var(--pink)",
    color: "white",
    fontWeight: "bold",
    width: "100%",
    height: "100%",
    borderRadius: "50px",
    ":focus": {
      border: "none !important",
      boxShadow: "none !important",
    },
  },
  buttonContainer: {
    width: "80%",
    maxWidth: "400px",
    height: "10vh",
    maxHeight: "60px",
    textAlign: "center",
    margin: "0 auto",
  },
};