import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HostingContextProvider from "./contexts/HostingContextProvider";
import BookingContextProvider from "./contexts/BookingContextProvider";
import UserContextProvider from "./contexts/UserContextProvider";
import AmenityContextProvider from "./contexts/AmenityContextProvider";
import AccommodationContextProvider from "./contexts/AccommodationContextProvider";

import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import HostingDetailPage from "./pages/HostingDetailPage";
import MyHostingPage from "./pages/MyHostingPage";
import PostHostingPage from "./pages/PostHostingPage";

import Navbar from "./components/base/Navbar";
import Footer from "./components/base/Footer";

import { StyleRoot } from "radium";

function App() {

  const page404 = () => (
    <h1>Page not found: {window.location.pathname}</h1>
  )

  return (
    <StyleRoot>
      <div className="App" style={styles.app}>
        <AccommodationContextProvider>
          <AmenityContextProvider>
            <HostingContextProvider>
              <BookingContextProvider>
                <UserContextProvider>
                  <Router>
                    <header className="App-header">
                      <Navbar />
                    </header>

                    <main>
                      <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/myPage" component={MyPage} />
                        <Route
                          exact
                          path="/hosting/:hostingId"
                          component={HostingDetailPage}
                        />
                        <Route
                          exact
                          path="/mypage/hostings"
                          component={MyHostingPage}
                        />
                        <Route
                          exact
                          path="/mypage/post"
                          component={PostHostingPage}
                        />
                        <Route
                          path="*"
                          component={page404}
                        />
                      </Switch>
                    </main>

                    <footer>
                      <Footer />
                    </footer>
                  </Router>
                </UserContextProvider>
              </BookingContextProvider>
            </HostingContextProvider>
          </AmenityContextProvider>
        </AccommodationContextProvider>
      </div>
    </StyleRoot>
  );
}

export default App;

const styles = {
  app: {
    display: "grid",
    gridTemplateRows: "70,14px 1fr 54,52px",
  },
};
