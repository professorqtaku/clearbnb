import CityList from '../components/CityList'
import { useState } from "react"
import ResultList from "../components/lists/ResultList"

export default function HomePage() {

  const [isSearch, setIsSearch] = useState(false)


  return (

    <div className="homePage" style={styles.grid}>
      <div>
        <SearchBar setIsSearch={setIsSearch} />
      </div>
      {isSearch ? <ResultList /> : <CityList />}
    </div>
  )
}