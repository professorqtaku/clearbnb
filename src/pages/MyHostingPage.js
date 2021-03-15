import React from 'react';
import  'react-router-dom'
import { useHistory } from 'react-router-dom';
import'../pages/HostingDetailPage';
const  MyHostingPage=({rental}) => {
  const history=useHistory();
  const startDate= rental.startDate*1000;
  const endDate = rental.endDate*1000;

  return (
    <div className="myHosyingPage" onClick={() => history.push("//" + rental._id)}>
      <div className="img">
        <img src={rental.imageURLs[0]} alt=""/>
      </div>
      <div className="info">
        <p><span>Title: </span>{rental.title}</p>
        <p><span>Start date: </span>{new Date(startDate).toString().substr(0, 15)}</p>
        <p><span>End date: </span>{new Date(endDate).toString().substr(0, 15)}</p>
        <p><span>Price/night: </span>{ rental.price }</p>
        <p><span>Guests:</span>{rental.guests}</p>
      </div>
    </div>
  );

  
}


export default MyHostingPage;