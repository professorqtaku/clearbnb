import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HostingContextProvider, { HostingContext } from './contexts/HostingContextProvider'
import UserContextProvider from './contexts/UserContextProvider'

import HomePage from './pages/HomePage'
import SearchResultPage from './pages/SearchResultPage'
import MyPage from './pages/MyPage'
import HostingDetailPage from './pages/HostingDetailPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Modal from './components/base/Modal'
import LoginForm from "./components/forms/LoginForm";
import Navbar from './components/base/Navbar'
import Footer from './components/base/Footer'
import Radium, { StyleRoot } from 'radium'


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
                <Modal content={<LoginForm />} title="Login" modalId="loginModal" />
          <Switch>
            <Route exact path="/" component={ HomePage }/>
            <Route exact path="/search/" component={SearchResultPage} />
            {/* <Route exact path="/login" component={ LoginPage }/> */}
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/myPage" component={MyPage} />
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
