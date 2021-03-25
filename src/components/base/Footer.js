//import Radium from 'radium'
import { useHistory } from "react-router-dom";
//import {Container,Row,Col} from "reactstrap"
import React from 'react'
import {Link} from "react-router-dom"




const Footer = () => {
  const history = useHistory();
  return (
    <div className="footer" style={styles.footer}>
      <Link
      className="btn btn-sm"
      style={styles.Link} onClick={() => history.push('/about')}>About us</Link>
      <Link
      className="btn btn-sm"
      style={styles.Link} onClick={()=> history.push('/contact')}>Contact us</Link>
      <Link
      className="btn btn-sm"
      style={styles.Link} onClick={() => history.push('/register')}>Become member</Link>
      <p style={styles.copyright}>Copyright 2021 | Group 5 TH Lund</p>
    </div>
  )
}
export default Footer;
const styles = {
  footer: {
    backgroundColor: "var(--lightgrey)",
    color: "var(--darkgrey) !important",
    textAlign:"center"
    
  },
 Link: {
    color: "var(--pink)",
    ":focus":{
      textAlign:"center"
    },
    marginTop: "20px",
    fontSize: "18px",
  },
  
  copyright: {
    color: "#9C9C9C",
    textAlign: "center",
    margin: "20",
    padding: "20",
    fontSize: "14px",
  }
}
