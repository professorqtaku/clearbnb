import {
  Label,
  Col,
  FormGroup
} from "reactstrap";

export default function AddressFormGroup() {
  return (
    <div>
      <FormGroup>
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
      <div className="row mb-3">
        <Col md={6}>
          <FormGroup>
            <Label for="city">City*</Label>
            <input
              className="form-control"
              type="text"
              name="city"
              id="hostingCityInput"
              required
            />
          </FormGroup>
        </Col>
        <Col md={4} sm={6}>
          <FormGroup>
            <Label for="state">State/Region/County</Label>
            <input
              className="form-control"
              type="text"
              name="state"
              id="hostingCountyInput"
            />
          </FormGroup>
        </Col>
        <Col md={2} sm={6}>
          <FormGroup>
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
        </Col>
      </div>
      <FormGroup>
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
  );
}
