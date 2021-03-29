import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HostingContextProvider from "./contexts/HostingContextProvider";
import BookingContextProvider from "./contexts/BookingContextProvider";
import UserContextProvider from "./contexts/UserContextProvider";
import AmenityContextProvider from "./contexts/AmenityContextProvider";
import AccommodationContextProvider from "./contexts/AccommodationContextProvider";
import AvailabilityContextProvider from "./contexts/AvailabilityContextProvider"

import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import HostingDetailPage from "./pages/HostingDetailPage";
import MyHostingPage from "./pages/MyHostingPage";
import MyBookingPage from "./pages/MyBookingPage";
import PostHostingPage from "./pages/PostHostingPage";
import BookingDetailPage from "./pages/BookingDetailPage"

import Navbar from "./components/base/Navbar";
import Footer from "./components/base/Footer";

import banner from "./assets/img/banner.jpg"

import { StyleRoot } from "radium";

function App() {
  return (
    <StyleRoot>
      <div className="App" style={styles.app}>
        <AccommodationContextProvider>
          <AmenityContextProvider>
            <HostingContextProvider>
              <BookingContextProvider>
                <UserContextProvider>
                  <AvailabilityContextProvider>
                    <Router>
                      <header className="App-header">
                        <Navbar />
                      </header>

                      <main style={{
                        minHeight: '90vh'
                      }}>
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
                            path="/mypage/bookings"
                            component={MyBookingPage}
                          />
                          <Route
                            exact
                            path="/mypage/post"
                            component={PostHostingPage}
                          />
                          <Route exact path="/booking/:bookingId" component={BookingDetailPage} />
                        </Switch>
                      </main>

                      <footer>
                        <Footer />
                      </footer>
                    </Router>
                  </AvailabilityContextProvider>
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
