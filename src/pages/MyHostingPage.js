import { useContext, useEffect, useState } from 'react'
import { HostingContext } from '../contexts/HostingContextProvider'
import { UserContext } from '../contexts/UserContextProvider'
import MyHostingCard from '../components/cards/MyHostingCard'

export default function MyHostingPage() {
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
      <div className="container">
        <p>Cards</p>
         {hostings.map(h => <MyHostingCard key={ h._id } hosting={ h }/>)} 
      </div>
    )
  }

  return (
    <div className="container">
      <h5 className="">My hostings</h5>
      {myHostings && showHostingCards(myHostings) }
    </div>
  )
}