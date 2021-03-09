import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HostingDetailPage from './pages/HostingDetailPage'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header"></header>

        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/hosting/:id" component={HostingDetailPage} />
          </Switch>
        </main>

        <footer></footer>
      </Router>
    </div>
  );
}

export default App;
