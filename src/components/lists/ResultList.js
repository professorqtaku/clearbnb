import { HostingContext } from '../../contexts/HostingContextProvider'
import { AvailabilityContext } from '../../contexts/AvailabilityContextProvider'
import { useEffect, useContext } from 'react'
import HostingCard from "../cards/HostingCard"
import Radium from 'radium'

const ResultList = () => {

  const { hostings } = useContext(HostingContext)
  const { availabilities, fetchAvailabilities } = useContext(AvailabilityContext)

  useEffect(() => {
    fetchAvailabilities()
  }, [])


  useEffect(() => {
  }, [hostings, availabilities]);

  const renderResults = (hostings, availabilities) => {

    console.log("availabilities: ", availabilities)
    console.log("hostings: ", hostings)

    

    const search = JSON.parse(localStorage.getItem("search"));
    const searchGuests = search[0].guests
    const filterByCity = hostings.filter((hosting) => hosting.address.city.includes(search[0].location));
    console.log("filterByCity: ", filterByCity)

    const getHostingAvailabilities = availabilities.filter((item) => item.hosting._id.includes(filterByCity._id))
    console.log("availability.hosting._id: ", availabilities[0].hosting._id, filterByCity[0]._id)
    console.log("getHostingAvailabilities: ", getHostingAvailabilities)


    var allFilteredList;

    //filter only by location if guests input is empty
    if (searchGuests === "") {
      allFilteredList = filterByCity
    } else {
      allFilteredList = filterByCity.filter((item) => item.guestAmount === parseInt(searchGuests));
    }

    console.log("allFilteredList before avail: ", allFilteredList)

    //filter availability
    for (let availability in getHostingAvailabilities) {
      if (getHostingAvailabilities.timePeriod[0] >= search[0].startDate && getHostingAvailabilities.timePeriod[1] <= search[0].endDate) {
        const filterByAvailability = allFilteredList.filter((item) => item._id === availability.hosting._id)
        allFilteredList = filterByAvailability
      }
    }
    

    console.log("allFilteredList after avail: ",allFilteredList)

    var noMatches;
    if (allFilteredList.length === 0) {
      noMatches = "No matches found"
    } else {
      noMatches = ""
    }

    return (
      <div>
        <h4 style={styles.noMatchesFound}>{noMatches}</h4>

        <div className="container" style={styles.grid}>
          {allFilteredList.map(hosting => <HostingCard className="m-20 col-md-6 col-lg-6" key={hosting._id} hosting={hosting} />)}
        </div>

      </div>
    )
  }
  const loading = (
    <div>
      Loading...
    </div>
  );
  return <div className="container">{hostings && availabilities ? renderResults(hostings, availabilities) : loading}</div>;
}

export default Radium(ResultList)

const styles = {

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: "2vw",
    '@media (min-width: 1000px)': {
      gridTemplateColumns: "repeat(2, 1fr)",
    }
  },

  noMatchesFound: {
    textAlign: "center",
    paddingTop: "30px",
  },

}

