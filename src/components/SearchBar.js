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
  width: '700px',
  backgroundColor: 'grey',
  // backgroundColor: 'rgba(255, 255, 255, 0.73)',
  display: 'grid',
  gridTemplateRows: '1fr',
  gridTemplateColumns: 'repeat(5, 1fr)',
  padding: '20px',
  
}
const gridItem = {
  
}
