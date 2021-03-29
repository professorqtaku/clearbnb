
import { useEffect, useState } from "react"
import ResultList from "../components/lists/ResultList"
import SearchBar from "../components/SearchBar"
import banner from "../assets/img/banner-alt-3.jpg"


export default function HomePage() {

  const [isSearch, setIsSearch] = useState("")
  const [minHeight, setMinHeight] = useState("92vh")

  useEffect(() => {
    if (isSearch) {
      setMinHeight('45vh')
    }
  });



  return (

    <div className="homePage">

      <div className="d-flex p-2 align-items-center" style={{
        minHeight: `${minHeight}`, transition: "300ms", backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '10% 10%'
      }}>
        <div className="container">
          <div className="row">
            <h1 className="col-12 text-center align-items-flexend" style={styles.h1}>Where do you want to go?</h1>
            <SearchBar className="col-12" setIsSearch={setIsSearch} />
          </div>
        </div>
      </div>
      {isSearch ? <ResultList /> : <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Quis risus sed vulputate odio. Sed euismod nisi porta lorem mollis aliquam ut.</p>}
    </div>
  )
}

const styles = {
  h1: {
    color: 'white',
    fontWeight: '700',
    padding: '2vh',

  },
  paragraph: {
    fontSize: '20px',
    textAlign: 'center',
    padding: '5vw 15vw',
    color: 'rgb(120,120,120)',
    width: '100%',
    margin: '0 auto',
    fontStyle: 'italic'
  }
}