import { HostingContext } from '../../contexts/HostingContextProvider'
import { useEffect, useContext } from 'react'
import HostingCard from "../cards/HostingCard"
import Radium from 'radium'

const ResultList = () => {

  const { hostings } = useContext(HostingContext)

  useEffect(() => {
  }, [hostings]);

  const renderResults = (hostings) => {

    const search = JSON.parse(localStorage.getItem("search"));
    const searchGuests = search[0].guests
    const filterByCity = hostings.filter((hosting) => hosting.address.city.includes(search[0].location));

    var allFilteredList;
    if (searchGuests === "") {
      allFilteredList = filterByCity
    } else {
      allFilteredList = filterByCity.filter((item) => item.guestAmount === parseInt(searchGuests));
    }

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
  return <div className="container">{hostings ? renderResults(hostings) : loading}</div>;
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

