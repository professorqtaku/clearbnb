
import { useState } from "react"
import ResultList from "../components/lists/ResultList"
import SearchBar from "../components/SearchBar"
import banner from "../assets/img/banner.jpg"


export default function HomePage() {

  const [isSearch, setIsSearch] = useState("")

  return (

    <div className="homePage" style={{ height: '60vh' }}>
      <div className="d-flex p-2 align-items-center" style={{ height: '100%' }}>
        <SearchBar setIsSearch={setIsSearch} />
      </div>
      {isSearch ? <ResultList /> : null}
    </div>
  )
}