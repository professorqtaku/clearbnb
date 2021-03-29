import { HostingContext } from '../../contexts/HostingContextProvider'
import { AvailabilityContext } from '../../contexts/AvailabilityContextProvider'
import { useEffect, useContext, useState } from 'react'
import HostingCard from "../cards/HostingCard"
import Radium from 'radium'

const ResultList = () => {

  const { hostings } = useContext(HostingContext)
  const { availabilities, fetchAvailabilities } = useContext(AvailabilityContext)

  useEffect(() => {
    fetchAvailabilities()
  }, [])

  const isAvailable = (hosting, startDate, endDate) => {
    for (let availability of availabilities) {
      if (availability.hosting === hosting._id) {
        let availableStartDate = availability.timePeriod[0];
        let availableEndDate = availability.timePeriod[1];
        if (
          startDate >= availableStartDate &&
          startDate <= availableEndDate &&
          endDate >= availableStartDate &&
          endDate <= availableEndDate
        )
          return true;
      }
    }
    return false;
  };

  const filterHostings = () => {
    const search = JSON.parse(localStorage.getItem("search"));
    const searchGuests = search[0].guests
    let filteredHostings = hostings.filter((hosting) =>
      hosting.address.city.toLowerCase().trim().includes(search[0].location.toLowerCase().trim()));
    
    filteredHostings = filteredHostings.filter((hosting) =>
      isAvailable(
        hosting,
        parseInt(search[0].startDate),
        parseInt(search[0].endDate)
      )
    );

    if(searchGuests !=="" ){
      filteredHostings = filteredHostings.filter((hosting) => hosting.guestAmount >= parseInt(searchGuests));
    }
    return filteredHostings
  }

  const renderResult = (hostings) => {
    let noMatches;
    if (hostings.length === 0) {
      noMatches = "No matches found";
    } else {
      noMatches = "";
    }
    return (
      <div>
        <h4 style={styles.noMatchesFound}>{noMatches}</h4>

        <div className="container mb-5" style={styles.grid}>
          {hostings.map((hosting) => (
            <HostingCard
              className="m-20 col-md-6 col-lg-6"
              key={hosting._id}
              hosting={hosting}
            />
          ))}
        </div>
      </div>
    );
  }

  const loading = (
    <div>
      Loading...
    </div>
  );
  return (
    <div className="container">
      {hostings && availabilities ? renderResult(filterHostings()) : loading}
    </div>
  );
}

export default Radium(ResultList)

const styles = {

  grid: {
    maxWidth: '1000px',
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: "2vw",
    '@media (min-width: 1000px)': {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    marginBottom: "5px",
  },

  noMatchesFound: {
    textAlign: "center",
    paddingTop: "30px",
  },

}

