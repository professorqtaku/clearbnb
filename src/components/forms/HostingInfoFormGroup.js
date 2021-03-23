import { FormGroup } from "reactstrap";
export default function HostingInfoFormGroup(props) {
  const accommodations = props.accommodations

  return (
    <div className="row">
      <FormGroup className="col-12 mb-3">
        <label className="form-label">Title*</label>
        <input
          className="form-control"
          type="text"
          name="title"
          id="hostingTitleInput"
          placeholder="Write something nice :)"
          required
        />
      </FormGroup>
      <FormGroup className="col-12 mb-3">
        <label className=" form-label">Description*</label>
        <textarea
          className="form-control"
          type="text"
          name="description"
          id="hostingDescriptionInput"
          placeholder="Write something nice about your place :)"
          required
        />
      </FormGroup>
      <FormGroup className="col-12 col-md-6 mb-3">
        <label className=" form-label">Price per night*</label>
        <div className="input-group">
          <span className="input-group-text">$</span>
          <input
            className="form-control"
            type="number"
            name="title"
            id="hostingPriceInput"
            min={0}
            required
          />
        </div>
        <div className="form-text">
          ClearBnB takes 15% profit of the selling price
        </div>
      </FormGroup>

      <FormGroup className="col-md-6 mb-3">
        <label for="select" className="form-label">
          Accommodation
        </label>

        <select id="hostingAccommodationSelect" className="form-select" required>
          <option selected disabled className="text-muted" value="">
            Choose the accommodation type
          </option>
          {accommodations
            ? accommodations.map((accommodation) => (
                <option value={accommodation.description}>{accommodation.description}</option>
              ))
            : null}
        </select>
      </FormGroup>
      <FormGroup className="col-sm-4 mb-3">
        <label className=" form-label">Guests*</label>
        <input
          className="form-control"
          type="number"
          id="hostingGuestAmountInput"
          min={0}
          required
        />
      </FormGroup>
      <FormGroup className="col-6 col-sm-4 mb-3">
        <label className=" form-label">Beds*</label>
        <input
          className="form-control"
          type="number"
          id="hostingBedAmountInput"
          min={0}
          required
        />
      </FormGroup>
      <FormGroup className="col-6 col-sm-4 mb-3">
        <label className=" form-label">Bedrooms*</label>
        <input
          className="form-control"
          type="number"
          id="hostingBedroomAmountInput"
          min={0}
          required
        />
      </FormGroup>
      <FormGroup className="col-12 mb-3">
        <label for="select" className="form-label">
          Image link
        </label>
        <div className="input-group">
          <input
            className="form-control"
            type="url"
            id="hostingGalleryInput"
            placeholder="Paste the image url link here..."
            required
          />
          <button
            href="#"
            className="btn btn-secondary btn-sm col-2 active align-self-end"
            type="button"
          >
            <span className="material-icons text-white">add</span>
          </button>
        </div>
      </FormGroup>
    </div>
  );
}
