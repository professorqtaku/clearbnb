import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useContext } from 'react'

export default function SearchResultPage() {
  const { searchQuery } = useParams()

  useEffect(() => {
    let ups = new URLSearchParams(searchQuery)
    console.log(ups.get('name'), 'ups');
  }, [])

  

  return (
    <div>
      <p>{searchQuery}</p>
    </div>
  )
}