import CityList from '../components/CityList'
import { useState } from "react"
import ResultList from "../components/lists/ResultList"
import SearchBar from "../components/SearchBar"
import banner from "../assets/img/banner.jpg"


export default function HomePage() {

  const [isSearch, setIsSearch] = useState(false)


  return (

    <div className="homePage">
      <div className="d-flex p-2 align-items-center" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: "60vh", marginBottom: "5vw"}}>
        <SearchBar setIsSearch={setIsSearch} />
      </div>
      {isSearch ? <ResultList /> : <CityList />}
    </div>
  )
}

const padding = {
  marginBottom: "5vw"
}
