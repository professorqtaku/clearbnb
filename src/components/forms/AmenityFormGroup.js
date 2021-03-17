import { Label, Col, FormGroup } from "reactstrap";
import { useContext } from "react";
import { AmenityContext } from "../../contexts/AmenityContextProvider";


export default function AmenityFormGroup() {
  const { amenities } = useContext(AmenityContext);

  const amenityCheckbox = (amenity) => {
    
  }

  return (
    <div>
      {amenities ?  amenities.map(amenity => <p>{amenity.description}</p>): null}
    </div>
  );
}
