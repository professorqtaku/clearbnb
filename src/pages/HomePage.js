
import { useState } from "react"
import ResultList from "../components/lists/ResultList"
import SearchBar from "../components/SearchBar"
import banner from "../assets/img/banner.jpg"


export default function HomePage() {

  const [isSearch, setIsSearch] = useState("")

  return (

    <div className="homePage">
      <div className="d-flex p-2 align-items-center" style={{
        minHeight: '80vh', backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
      }}>
        <SearchBar setIsSearch={setIsSearch} />
      </div>
      {isSearch ? <ResultList /> : <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Quis risus sed vulputate odio. Sed euismod nisi porta lorem mollis aliquam ut.</p>}
    </div>
  )
}

const styles = {
  paragraph: {
    fontSize: '20px',
    textAlign: 'center',
    padding: '5vw 15vw',
    width: '100%',
    margin: '0 auto',
    color: 'rgb(120,120,120)',
    fontStyle: 'italic'
  }
}