import {Form} from "reactstrap";
import { useContext } from "react";
import { AccommodationContext } from "../../contexts/AccommodationContextProvider";

import AddressFormGroup from "./AddressFormGroup";
import HostingInfoFormGroup from "./HostingInfoFormGroup";
import AmenityFormGroup from "./AmenityFormGroup";

export default function HostingForm() {
  const { accommodations } = useContext(AccommodationContext);

  const submitHosting = (e) => {
    e.preventDefault();
    let street = document.getElementById("hostingAccommodationSelect").value;
  };

  const amenityCheckbox = (a) => {
    return(<option key={a._id}>{a.description}</option>)
  }

  return (
    <div className="container" style={styles.container}>
      <Form onSubmit={submitHosting}>
        <HostingInfoFormGroup />
        <AddressFormGroup />
        <AmenityFormGroup />
        <div className="mb-5"></div>
        <button className="btn" type="submit">
          Post a hosting
        </button>
      </Form>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "var(--lightgrey)",
    padding: "2vw",
    borderRadius: "10px"
  }
}