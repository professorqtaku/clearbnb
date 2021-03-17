import { Form, Label, Col, FormGroup, Input, Button, Row, FormText} from 'reactstrap'
import AddressFormGroup from './AddressFormGroup'
export default function HostingForm() {

  const submitHosting = (e) => {
    e.preventDefault()
    let street = document.getElementById("hostingStreetInput").value
    console.log(street);
  }

  return (
    <div className="container">
      <Form onSubmit={submitHosting}>
        <AddressFormGroup />
        <div className="row">
          <FormGroup>
            
          </FormGroup>
        </div>

        <div className="mb-5"></div>
        <button className="btn" type="submit">
          Post a hosting
        </button>
      </Form>
    </div>
  );
}
