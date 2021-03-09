export default function SearchBar() {
  return (
    <div style={gridContainer}>
      <div style={gridItem}>
        <input placeholder="location"></input>
      </div>
      <div style={gridItem}>
        <input placeholder="Check in"></input>
      </div>
      <div style={gridItem}>
        <input placeholder="Check out"></input>
      </div>
      <div style={gridItem}>
        <input placeholder="Guests"></input>
      </div>
      <div style={gridItem}>
        <button>Search</button>
      </div>
    </div>
  )
}
const gridContainer = {
  backgroundColor: 'grey'
}
const gridItem = {
  backgroundColor: 'white'
}
