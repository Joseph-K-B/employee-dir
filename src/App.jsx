import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./views/Auth/Auth";
import Profile from "./views/Profile/Profile";
import { UserProvider } from "./context/UserCtx";
import ConfirmEmail from "./views/Auth/Confirm";
import ProfileSettings from "./views/Settings/ProfileSettings";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export default function App() {
  return (
    <>
    <UserProvider>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path= '/'>
            <h1>Hello World</h1>
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
            <PrivateRoute path='/settings'>
              <ProfileSettings />
            </PrivateRoute>
            <PrivateRoute path='/profile'>
              <Profile />
            </PrivateRoute>
          </Switch>
        </main>
      </Router>
    </UserProvider>
    </>
  )
}
