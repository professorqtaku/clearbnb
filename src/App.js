import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HostingContextProvider from './contexts/HostingContextProvider'
import BookingContextProvider from './contexts/BookingContextProvider'
import UserContextProvider from './contexts/UserContextProvider'

import HomePage from './pages/HomePage'
import MyPage from './pages/MyPage'
import HostingDetailPage from './pages/HostingDetailPage'
import RegisterPage from './pages/RegisterPage'
import MyHostingPage from './pages/MyHostingPage'
import Navbar from './components/base/Navbar'
import Footer from './components/base/Footer'
import Aboutpage from'./pages/AboutPage'

import { StyleRoot } from 'radium'

function App() {
  return (
    <StyleRoot>
      <div className="App" style={styles.app}>
        <HostingContextProvider>
          <BookingContextProvider>
            <UserContextProvider>
              <Router>
                <div className="page-container">

                  <Navbar />
                

                <main>
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/myPage" component={MyPage} />
                    <Route exact path="/hosting/:hostingId"
                      component={HostingDetailPage}/>
                    <Route exact path="/mypage/hostings" component={MyHostingPage} />
                    <Route exact path="/about" component ={Aboutpage} />
                  </Switch>
                </main>
 </div>
                <footer>
                  <Footer />
                </footer>
              </Router>
            </UserContextProvider>
          </BookingContextProvider>
        </HostingContextProvider>
      </div>
    </StyleRoot>
  );
}

export default App;

const styles = {
  app: {
    display: "grid",
    gridTemplateRows: "70,14px 1fr 54,52px"
  }
}
