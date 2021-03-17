import { Form, Label, Col, FormGroup, Input, Button, Row, FormText } from 'reactstrap'
import {useContext} from 'react'
import { AmenityContext } from '../../contexts/AmenityContextProvider'

import AddressFormGroup from './AddressFormGroup'

export default function HostingForm() {

  const { amenities } = useContext(AmenityContext)

  const submitHosting = (e) => {
    e.preventDefault()
    let street = document.getElementById("hostingStreetInput").value
    console.log(street);
  }

  return (
    <div className="container">
      <Form onSubmit={submitHosting}>
        <div className="row">
          <FormGroup>
            <label htmlFor="title">Title*</label>
            <input
              className="form-control"
              type="text"
              name="title"
              id="hostingTitleInput"
              placeholder="Write something nice :)"
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="title">Description*</label>
            <textarea
              className="form-control"
              type="text"
              name="description"
              id="hostingDescriptionInput"
              placeholder="Write something nice about your place :)"
              required
            />
          </FormGroup>
        </div>
        <AddressFormGroup />
        <div className="mb-5"></div>
        <button className="btn" type="submit">
          Post a hosting
        </button>
      </Form>
    </div>
  );
}
