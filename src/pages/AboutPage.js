import React from'react'
import Radium from 'radium'
import Background from'../background.jpg'


const AboutPage = () => {

    return(
      <div style={{ backgroundImage: `url(${Background})`, height: '100vh', margin: '0', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

        
        <div style={styles.div}>
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

export default Radium(AboutPage) ;


const styles = {
  
  div: {
    width: '100%'
  },

  box: {
    display: 'inline-block',
    float: 'center',
    margin: '50px ',
    marginTop: '100px',
    maxWidth: '300px',
    backgroundColor: "rgba(255, 100, 111, 0.9)",
    padding: '30px',
    borderRadius: '30px',
    textAlign: 'center'

  },
  text: {
    textAlign: 'center',
    color: "white",
    fontWeight: '500',
    letterSpacing: '0.7px',
    margin:'auto'
    
  },
  background: {
    backgroundImage: '../background.jpg',
    height:'100vh'
  },
  p:{
    color: "white !important",
    textAlign: 'center'
  }


}






