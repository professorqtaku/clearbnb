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
    if (hostings) {
      let matchedHostings = []
      for (let hosting of hostings) {
        if (hosting.host._id === user._id) {
          matchedHostings.push(hosting)
        }
      }
      setMyHostings(matchedHostings)
    }
  }, [hostings, myHostings])

  const showHostingCards = (hostings) => {
    return (
      <div className="container" style={styles.cardlist}>
         {hostings.map(hosting => <MyHostingCard key={ hosting._id } hosting={ hosting }/>)} 
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