import React from'react'
import Radium from 'radium'
//import{Row, Col, Container} from 'reactstrap'
import Background from'../background.jpg'


const AboutPage = () => {

    return(
      <div style={{ backgroundImage: `url(${Background})`, height: '100vh', margin: '0', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

        
          <div style={{ width: '100%' }}>
            <div style={styles.box}>
              <p style={styles.text}>
             
                        ClearBnB is a mockup product created during the School of Technology's education 
                        to try out how to create a website from the ground up with React
                       
                        <h2> Teknikhögskolan Lund (group 5)</h2></p>
            </div>
          </div >
        </div>
     
    );
}
 
const styles ={

  box: {
    display: 'inline-block',
    float: 'center',
    margin: '30vh 0 0 20vh',
    maxWidth: '400px',
    backgroundColor: 'red',
    opacity: '70%',
    padding: '30px',
    borderRadius: '10px'

  },
  text: {
    color: 'white',
    fontWeight: '900',
    letterSpacing: '0.7px'
  },
  background: {
    backgroundImage: ''
  },
  p:{
    color: 'black',
  }


}

    export default AboutPage;





