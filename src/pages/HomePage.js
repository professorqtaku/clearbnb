import {useHistory} from 'react-router-dom'
import CityList from '../components/CityList'

export default function HomePage() {
  const history = useHistory()

  

  return (
    <div>
      <h1>Home Page</h1>
      <CityList />
    </div>
  );
}