import React from'react'
import Radium from'radium'
import ReactDOM from'react-dom'
import '../contactPage.css'
const ContactPage = () => {

      const [inputs, setInputs] = React.useState({name: '', email: '', message: ''});
  
      const handleInputChange = (e) => {
          e.persist();
          setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
      }
  
      const sendMessage = (e) => {
          if (e) e.preventDefault();
          const message = inputs.message;
          const messageEnter = message.replace(/\r\n|\r|\n/g,"%0D%0A").replace(' ',"%20");
          const request = "mailto:YOUREMAIL?subject=Email%20from%20"
              +inputs.name+"/"
              +inputs.email+"&body="
              +messageEnter;
          document.location = request;
      }
      return (  
        <div className="contact__wrap">
          <h1>Contact us</h1>
          <form 
            onSubmit={e=>sendMessage(e)} 
            className="contact__form">
              <input 
              defaultValue={inputs.name}
                onChange={e=>handleInputChange(e)} 
                type="text" name="name" 
                placeholder="name" 
                title="Your name" 
                maxLength="50" 
                required/>
              <input 
                defaultValue={inputs.email} 
                onChange={e=>handleInputChange(e)} 
                type="email" name="email" 
                placeholder="email" 
                title="Your email" 
                maxLength="50" 
                required/>
              <textarea 
                defaultValue={inputs.message} 
                onChange={e=>handleInputChange(e)} 
                type="text" name="message" 
                placeholder="message" 
                title="Your message" 
                maxLength="550" 
                required/>
              <input 
                type="submit" 
                defaultValue="send message"/>
          </form> 
        </div>
      )
  }
  
  ReactDOM.render(
    <ContactPage />,
    document.getElementById('root')
  );
export default Radium(ContactPage)