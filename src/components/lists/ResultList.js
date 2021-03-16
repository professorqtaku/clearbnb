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

    const search = JSON.parse(localStorage.getItem("search"));
    const searchGuests = search[0].guests
    const filterByCity = hostings.filter((hosting) => hosting.address.city.includes(search[0].location));
    const allFilteredList = filterByCity.filter((item) => item.guestAmount === parseInt(searchGuests));

    var noMatches;
    if (allFilteredList.length === 0) {
      noMatches = "No matches found"
    } else {
      noMatches =""
    }
    const card = hostingItem => (
      <div style={styles.cardStyle}>
        <div
          className="card"
          key={hostingItem._id}
          style={styles.cardWrapper}
          onClick={() => history.push('/hosting/' + hostingItem._id)}
        >
          <img style={{
            width: '100%',
            height: '100px',
            borderRadius: '2px',
            objectFit: 'cover'
          }}
            key={hostingItem.galleries}
            src={hostingItem.galleries[0]}
            alt={'Image not found'}

          />
          <div>
            <h3 style={styles.title} key={hostingItem.title} >{hostingItem.title}</h3>
            <p style={styles.info} key={hostingItem.host.firstName}>{hostingItem.host.firstName}{hostingItem.host.lastName} </p>
            <p style={styles.info} key={hostingItem.price}>${hostingItem.price}/night </p>
          </div>
        </div>
      </div>
    )

    return (
      <div>
        <h4 style={noMatchesFound}>{noMatches}</h4>
        <div style={styles.list} >
          {allFilteredList.map(hostingItem => card(hostingItem))}
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


const styles = {
  list: {
    marginTop: '5vw',
    marginBottom: '5vw',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    gridGap: '2vw'
  },
  cardWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '2px',
    gridGap: '2vw'
  },
  title: {
    fontSize: '16px',
    margin: '0'
  },
  info: {
    margin: '0'
  },
}

const noMatchesFound = {
  textAlign: 'center',
  paddingTop: '30px'
}
