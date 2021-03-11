import CityCard from "./cards/CityCard"
import Radium from 'radium'

function CityList(props) {

  return (
    <div className="container" style={styles}>
      {cities.map(c => <CityCard city={ c }/>)}
    </div>
  );
}

const styles = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridGap: '20px',
  '@media (min-width: 500px)': {
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  '@media (min-width: 800px)': {
    gridTemplateColumns: "repeat(3, 1fr)"
  },
  '@media (min-width: 1000px)': {
    gridTemplateColumns: "repeat(4, 1fr)"
  }
};

const cities = [
  {
    name: 'Berlin',
    imageUrl: 'https://cdn1.vagabond.se/YTo2OntzOjI6ImlkIjtpOjE1MzMzNjI7czoxOiJ3IjtpOjQ4MDtzOjE6ImgiO2k6NDE3O3M6MToiYyI7aTowO3M6MToicyI7aTowO3M6MToiayI7czo0MDoiYTA1MjhjNzBkODRhOWExOWFiYzUxYzhhMTJjYmI4OGNkMzNmMzFiMCI7fQ=='
  },
  {
    name: 'Stockholm',
    imageUrl: 'https://cdn1.vagabond.se/YTo2OntzOjI6ImlkIjtpOjE1MzMzNjI7czoxOiJ3IjtpOjQ4MDtzOjE6ImgiO2k6NDE3O3M6MToiYyI7aTowO3M6MToicyI7aTowO3M6MToiayI7czo0MDoiYTA1MjhjNzBkODRhOWExOWFiYzUxYzhhMTJjYmI4OGNkMzNmMzFiMCI7fQ=='
  },
  {
    name: 'Paris',
    imageUrl: 'https://cdn1.vagabond.se/YTo2OntzOjI6ImlkIjtpOjE1MzMzNjI7czoxOiJ3IjtpOjQ4MDtzOjE6ImgiO2k6NDE3O3M6MToiYyI7aTowO3M6MToicyI7aTowO3M6MToiayI7czo0MDoiYTA1MjhjNzBkODRhOWExOWFiYzUxYzhhMTJjYmI4OGNkMzNmMzFiMCI7fQ=='
  },
  {
    name: 'London',
    imageUrl: 'https://cdn1.vagabond.se/YTo2OntzOjI6ImlkIjtpOjE1MzMzNjI7czoxOiJ3IjtpOjQ4MDtzOjE6ImgiO2k6NDE3O3M6MToiYyI7aTowO3M6MToicyI7aTowO3M6MToiayI7czo0MDoiYTA1MjhjNzBkODRhOWExOWFiYzUxYzhhMTJjYmI4OGNkMzNmMzFiMCI7fQ=='
  },
  {
    name: 'Helsingborg',
    imageUrl: 'https://cdn1.vagabond.se/YTo2OntzOjI6ImlkIjtpOjE1MzMzNjI7czoxOiJ3IjtpOjQ4MDtzOjE6ImgiO2k6NDE3O3M6MToiYyI7aTowO3M6MToicyI7aTowO3M6MToiayI7czo0MDoiYTA1MjhjNzBkODRhOWExOWFiYzUxYzhhMTJjYmI4OGNkMzNmMzFiMCI7fQ=='
  },
  {
    name: 'City with a long as name',
    imageUrl: 'https://cdn1.vagabond.se/YTo2OntzOjI6ImlkIjtpOjE1MzMzNjI7czoxOiJ3IjtpOjQ4MDtzOjE6ImgiO2k6NDE3O3M6MToiYyI7aTowO3M6MToicyI7aTowO3M6MToiayI7czo0MDoiYTA1MjhjNzBkODRhOWExOWFiYzUxYzhhMTJjYmI4OGNkMzNmMzFiMCI7fQ=='
  },
]
  
export default Radium(CityList)
