import { useParams, withRouter } from "react-router-dom";
import SearchBar from "../components/SearchBar"
import ResultList from '../components/lists/ResultList'


export default function SearchResultPage() {
  

  return (
    <div>
      <SearchBar/>
      <ResultList />
    </div>
  );
}