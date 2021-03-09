import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HostingContextProvider, { HostingContext } from './contexts/HostingContextProvider'

import HomePage from './pages/HomePage'
import HostingDetailPage from './pages/HostingDetailPage'

function App() {
  return (
    <div className="App">
      <HostingContextProvider>
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
      </HostingContextProvider>
    </div>
  );
}

export default App;
