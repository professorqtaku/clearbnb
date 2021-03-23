import { HostingContext } from '../../contexts/HostingContextProvider'
import { useEffect, useContext } from 'react'
import MyHostingCard from "../cards/HostingCard"

export default function ResultList() {

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
        <div style={styles.list} >
          {allFilteredList.map(hosting => <MyHostingCard key={hosting._id} hosting={hosting} />)}
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
    marginTop: "5vw",
    marginBottom: "5vw",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
    gridGap: "2vw",
  },
  cardWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "2px",
    gridGap: "2vw",
  },
  title: {
    fontSize: "16px",
    margin: "0",
  },
  info: {
    margin: "0",
  },
  noMatchesFound: {
    textAlign: "center",
    paddingTop: "30px",
  },
  image: {
    width: "100%",
    height: "100px",
    borderRadius: "2px",
    objectFit: "cover",
  },
};

