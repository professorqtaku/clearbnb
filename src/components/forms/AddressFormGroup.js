import {
  Label,
  Col,
  FormGroup
} from "reactstrap";

export default function AddressFormGroup() {
  return (
    <div>
      <div className="row mb-3">
        <FormGroup className="col-md-6 mb-3">
          <label htmlFor="address">Address*</label>
          <input
            className="form-control"
            type="text"
            name="address"
            id="hostingStreetInput"
            placeholder="Main St 1234"
            required
          />
        </FormGroup>
        <FormGroup className="col-md-6 mb-3">
          <Label for="city">City*</Label>
          <input
            className="form-control"
            type="text"
            name="city"
            id="hostingCityInput"
            required
          />
        </FormGroup>
        <FormGroup className="col-md-3 col-sm-6 mb-3">
          <Label for="state">State/Region/County</Label>
          <input
            className="form-control"
            type="text"
            name="state"
            id="hostingCountyInput"
          />
        </FormGroup>
        <FormGroup className="col-md-3 col-sm-6 mb-3">
          <Label for="zipCode">Zip code*</Label>
          <input
            className="form-control"
            type="number"
            name="zipCode"
            id="hostingZipCodeInput"
            min={0}
            placeholder="123 45"
            required
          />
        </FormGroup>
        <FormGroup className="col-md-6 mb-3">
          <Label for="country">Country*</Label>
          <input
            className="form-control"
            type="text"
            id="hostingCountryInput"
            placeholder="Apartment, studio, or floor"
            required
          />
        </FormGroup>
      </div>
    </div>
  );
}