import SearchBar from "../components/SearchBar"
export default function HomePage() {

  return (
    <div className="homePage" style={styles.grid}>
      <div style={styles.row1}>
        <SearchBar />
      </div>
    </div>
  )
}

const styles = {
  grid: {
    margin: '0 auto 0',
    width: '95vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(1,fr)'
  },
  banner: {
    gridRow: '1',
  },
}


