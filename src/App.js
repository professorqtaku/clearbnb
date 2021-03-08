import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/base/Navbar'

function App() {
  return (
    <div className="App">
        <Router>
        <header className="App-header">
          <Navbar />
      </header>

      <main>
          <Switch>
            <Route exact path="/" component={ HomePage }/>
          </Switch>
      </main>

      <footer>
      </footer>
      </Router>
    </div>
  );
}

export default App;
