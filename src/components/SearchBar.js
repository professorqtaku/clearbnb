export default function SearchBar() {
  return (
    <div style={styles.gridContainer}>
      <div style={styles.location}>
        <input style={styles.input} placeholder="location"></input>
      </div>
      <div style={styles.gridItem}>
        <input style={styles.input} placeholder="Check in"></input>
      </div>
      <div style={styles.gridItem}>
        <input style={styles.input} placeholder="Check out"></input>
      </div>
      <div style={styles.gridItem}>
        <input style={styles.input} placeholder="Guests"></input>
      </div>
      <div style={styles.gridItem}>
        <button style={styles.input} >Search</button>
      </div>
    </div>
  )
}

const styles = {
  gridContainer: {
    // backgroundColor: 'rgba(255, 255, 255, 0.73)',
    display: 'grid',
    gridTemplateRows: '3fr',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '10px'
  },

  input: {
    width: '100%'
  },

  location: {
    gridArea: '1/1/2/3'
  }
}

