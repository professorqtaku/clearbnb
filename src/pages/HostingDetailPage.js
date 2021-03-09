import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { HostingContext } from '../contexts/HostingContextProvider'

export default function HostingDetailPage(props) {
  const { id } = useParams()
  const { hostings, fetchHostings } = useContext(HostingContext)
  const hosting = ''
  
  //const hosting = hostings.find(h => h.id = id)
  //console.log(hosting);
  
  useEffect(async () => {
    console.log('before', hostings);
    await fetchHostings();
    console.log("afterd", hostings);
  }, [])

  return (
    <div>
      <h1>Hosting detail</h1>
      <p>{  }</p>
    </div>
  )
}