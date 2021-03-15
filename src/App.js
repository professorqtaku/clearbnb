import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HostingContextProvider from './contexts/HostingContextProvider'
import UserContextProvider from './contexts/UserContextProvider'

import HomePage from './pages/HomePage'
import MyPage from './pages/MyPage'
import HostingDetailPage from './pages/HostingDetailPage'
import RegisterPage from './pages/RegisterPage'
import MyHostingPage from './pages/MyHostingPage'

import Modal from './components/base/Modal'
import Navbar from './components/base/Navbar'
import Footer from './components/base/Footer'

import { StyleRoot } from 'radium'

function App() {
  return (
    <StyleRoot>

    <div className="App">
      <HostingContextProvider>
      <UserContextProvider>
        <Router>
        <header className="App-header">
          <Navbar />
      </header>

      <main>
          <Switch>
            <Route exact path="/" component={ HomePage }/>
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/mypage" component={MyPage} />
            <Route exact path="/mypage/hostings" component={MyHostingPage} />
            <Route exact path="/hosting/:hostingId" component={HostingDetailPage} />
          </Switch>
      </main>

      <footer>
        <Footer />
      </footer>
      </Router>
      </UserContextProvider>
      </HostingContextProvider>
    </div>
    </StyleRoot>
  );
}

export default App;
