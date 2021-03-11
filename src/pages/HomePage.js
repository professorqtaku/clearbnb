import {useHistory} from 'react-router-dom'
import CityList from '../components/CityList'

export default function HomePage() {
  const history = useHistory()
  const goTo = (e) => {
    history.push(`/hosting/${e.target.value}`)
  }

  return (
    <div>
      <h1>Home Page</h1>
      <CityList />
    </div>
  );
}