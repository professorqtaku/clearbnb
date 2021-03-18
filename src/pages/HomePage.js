import CityList from '../components/CityList'
import SearchBar from "../components/SearchBar"
import { useState } from "react"
import ResultList from "../components/lists/ResultList"

export default function HomePage() {

  const [isSearch, setIsSearch] = useState(false)
  
  


  return (
    
    <div className="homePage" style={styles.grid}>
      <div>
        <SearchBar setIsSearch={setIsSearch}/>
      </div>
      {isSearch ? <ResultList /> : <CityList />}
    </div>
  )
  
}
const styles = {
  grid: {
    margin: '0 auto 0',
    width: '95vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(1,fr)'
  },
  banner: {
    gridRow: '1',
  },
}


