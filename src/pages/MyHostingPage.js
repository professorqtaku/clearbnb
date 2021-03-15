import { useContext, useEffect, useState } from 'react'
import { HostingContext } from '../contexts/HostingContextProvider'
import { UserContext } from '../contexts/UserContextProvider'
import MyHostingCard from '../components/cards/MyHostingCard'
import Radium from 'radium'

const MyHostingPage = () => {
  const { hostings } = useContext(HostingContext)
  const {user} = useContext(UserContext)
  const [ myHostings, setMyHostings ] = useState()

  useEffect(() => {
    console.log(hostings);
    if (hostings) {
      let matchedHostings = []
      for (let h of hostings) {
        if (h.host._id === user._id) {
          matchedHostings.push(h)
        }
      }
      setMyHostings(matchedHostings)
    }
    console.log(myHostings);
  }, [hostings])

  const showHostingCards = (hostings) => {
    return (
      <div className="container" style={styles.cardlist}>
         {hostings.map(h => <MyHostingCard key={ h._id } hosting={ h }/>)} 
      </div>
    )
  }

  return (
    <div className="container" style={styles.page}>
      <h5 className="">My hostings</h5>
      {myHostings && showHostingCards(myHostings) }
    </div>
  )
}

export default Radium(MyHostingPage)

const styles = {
  page: {
    backgroundColor: "var(--lightgrey",
  },
  cardlist: {
    display: "grid",
    gridTemplateColumns: "1fr",
    '@media (min-width: 1000px)': {
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: "2vw"
  },
  }
};