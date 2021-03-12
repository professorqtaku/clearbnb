import { HostingContext } from '../../contexts/HostingContextProvider'
import { useEffect, useState, useContext, forwardRef } from 'react'
import { useParams, withRouter, useHistory } from "react-router-dom";


export default function ResultList() {
  const history = useHistory()

  const { hostings } = useContext(HostingContext)

  useEffect(() => {
    console.log("hostings: ", hostings
    )
  }, [hostings]);

  const renderResults = (hostings) => {

    const search = JSON.parse(localStorage.getItem("search"))
    const filteredList = hostings.filter((hosting) => hosting.address.city.includes(search[0].location));

    const card = hostingItem => (
      <div style={cardStyle}>
        <div
          className="card"
          key={hostingItem._id}
          style={cardWrapper}
          onClick={() => history.push('/hosting/' + hostingItem._id)}
        >
          <img style={{
            width: '100%',
            height: '100px',
            borderRadius: '2px',
            objectFit: 'cover'
          }}
            src={hostingItem.galleries[0]}
            alt={'Image not found'}
          />
          <div>
            <h3 style={title} >{hostingItem.title}</h3>
            <p style={info}>{hostingItem.host.firstName}{hostingItem.host.lastName} </p>
            <p style={info}>{hostingItem.price}/night </p>
          </div>
        </div>
      </div>
    )

    return (
      <div>
        <div style={list} >
          {filteredList.map(hostingItem => card(hostingItem))}
        </div>
      </div>
    )
  }
  const loading = (
    <div>
      Loading...
    </div>
  );
  return <div className="container">{hostings ? renderResults(hostings) : loading}</div>;
}


const list = {
  marginTop: '5vw',
  marginBottom: '5vw',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr',
  gridGap: '2vw'
}


const cardWrapper = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  padding: '2px',
  gridGap: '2vw'
}
const cardStyle = {

}

const title = {
  fontSize: '16px',
  margin: '0'
}
const info = {
  margin: '0'
}