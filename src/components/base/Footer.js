//import Radium from 'radium'
import { useHistory } from "react-router-dom";
import {Container,Row,Col} from "reactstrap"
import React from 'react'




const Footer = () => {

 const history=useHistory();
 const goTo = (e) => {
  history.push("/" + e.target.value);
  }
  return (
    <div className="container-fluid">
        <Row style={{color:"var(--pink)"}}className="font-small indigo " >

          <Col sm="5" md="3" className="mb-3">
          </Col>
          <Col sm="5" md="3" className="mb-3">
          <button className="mt-5 mb-3" style={styles.button} onClick={goTo} value="about">
           About us
          </button>
          </Col>

          <Col sm="5" md="3" className="mb-3">
          <button className="mt-5 mb-3" style={styles.button} onClick={goTo} value="contact">
           Contact us
          </button>
          </Col>
          </Row>
   </div>

   );

  }

export default Footer;

const styles = {
button: {
backgroundColor: 'var(--pink)',
 color: 'white',
  fontWeight: 'bold',
  width: '100%',
  borderRadius: '50px',
  ':focus': {
    border: 'none !important'
  }
}
}
   