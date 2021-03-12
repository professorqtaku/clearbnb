import { useParams, withRouter } from "react-router-dom";
import SearchBar from "../components/SearchBar"
import ResultList from '../components/lists/ResultList'


export default function SearchResultPage() {
  

  return (
    <div style={wrapper}>
      <SearchBar/>
      <ResultList />
    </div>
  );
}

const wrapper = {
  margin: '0px auto',
  width: '95vw'
}