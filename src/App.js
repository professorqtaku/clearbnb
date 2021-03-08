import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/HomePage'

function App() {
  return (
    <div className="App">
        <Router>
      <header className="App-header">
      </header>

      <main>
          <Switch>
            <Route exact path="/" component={ Home }/>
          </Switch>
      </main>

      <footer>

      </footer>
      </Router>
    </div>
  );
}

export default App;
