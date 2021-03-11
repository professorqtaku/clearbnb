import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HostingContextProvider, { HostingContext } from './contexts/HostingContextProvider'

import HomePage from './pages/HomePage'
import SearchResultPage from './pages/SearchResultPage'
import HostingDetailPage from './pages/HostingDetailPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Navbar from './components/base/Navbar'
import Footer from './components/base/Footer'
import Radium, { StyleRoot } from 'radium'


function App() {
  return (
    <StyleRoot>

      <div className="App">
        <HostingContextProvider>
          <Router>
            <header className="App-header">
              <Navbar />
            </header>

            <main>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/search/:urlsearchparam" component={SearchResultPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/hosting/:hostingId" component={HostingDetailPage} />
              </Switch>
            </main>

            <footer>
              <Footer />
            </footer>
          </Router>
        </HostingContextProvider>
      </div>
    </StyleRoot>
  );
}



export default App;
