import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./views/Auth/Auth";
import Profile from "./views/Profile/Profile";
import { UserProvider, useUser } from "./context/UserCtx";
import ConfirmEmail from "./views/Auth/Confirm";
import ProfileSettings from "./views/Settings/ProfileSettings";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import { ProfileProvider } from "./context/ProfileCtx";
import Home from "./views/Home/Home";

export default function App() {
  return (
    <>
      {/* <ProfileProvider> */}
        <Router>
          <UserProvider>
          <Header />
          <main>
            <Switch>
              <Route exact path= '/'>
                <Home authRequired/>
              </Route>
              <Route path='/register'>
                <Auth registerRequired/>
              </Route>
              <Route path='/login'>
                <Auth />
              </Route>
              <Route path='/confirm-email'>
                <ConfirmEmail />
              </Route>
              //protected
              <PrivateRoute path='/home'>
                <Home />
              </PrivateRoute>
              <PrivateRoute path='/create'>
                <ProfileSettings />
              </PrivateRoute>
              <PrivateRoute path='/settings'>
                <ProfileSettings />
              </PrivateRoute>
              <PrivateRoute path='/profile'>
                <Profile />
              </PrivateRoute>
            </Switch>
          </main>
          </UserProvider>
        </Router>
      {/* </ProfileProvider> */}
    </>
  )
}
