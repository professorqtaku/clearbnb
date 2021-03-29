import { useContext, useEffect, useState } from 'react'
import { HostingContext } from '../contexts/HostingContextProvider'
import { UserContext } from '../contexts/UserContextProvider'
import MyHostingCard from '../components/cards/MyHostingCard'
import Radium from 'radium'
import myHostingBackground from "../assets/img/myHostingBackground.jpg"

const MyHostingPage = () => {
  const { hostings } = useContext(HostingContext)
  const {user} = useContext(UserContext)
  const [ myHostings, setMyHostings ] = useState()

  useEffect(() => {
    if (hostings && user) {
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
    <div className="d-flex p-2 align-items-center" style={{ backgroundImage: `url(${myHostingBackground})`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
    <div className="" style={styles.page}>
      <h5 className="">My hostings</h5>
      {myHostings && showHostingCards(myHostings) }
    </div>
    </div>
  )
}

export default Radium(MyHostingPage)

const styles = {
  page: {
    maxwidth: "400px",
    margin: '0 auto',
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "rgba(255,255,255,0.7)",
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