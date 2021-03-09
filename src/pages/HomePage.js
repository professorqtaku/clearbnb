import {useHistory} from 'react-router-dom'

export default function HomePage() {
  const history = useHistory()
  const goTo = (e) => {
    history.push(`/hosting/${e.target.value}`)
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button className="btn" onClick={goTo} value="6047662ab42a7e261019ff88">
        6047662ab42a7e261019ff88
      </button>
    </div>
  );
}