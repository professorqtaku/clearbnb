import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HostingContextProvider, { HostingContext } from './contexts/HostingContextProvider'
import UserContextProvider from './contexts/UserContextProvider'

import HomePage from './pages/HomePage'
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
      <UserContextProvider>
      <HostingContextProvider>
        <Router>
        <header className="App-header">
          <Navbar />
      </header>

      <main>
          <Switch>
            <Route exact path="/" component={ HomePage }/>
            <Route exact path="/login" component={ LoginPage }/>
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/hosting/:hostingId" component={HostingDetailPage} />
          </Switch>
      </main>

      <footer>
        <Footer />
      </footer>
      </Router>
      </HostingContextProvider>
      </UserContextProvider>
    </div>
    </StyleRoot>
  );
}

export default App;
