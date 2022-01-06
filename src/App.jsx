import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./views/Auth/Auth";
import ProfileForm from "./components/ProfileForm/ProfileForm";
import Profile from "./views/Profile/Profile";
import { UserProvider } from "./context/UserCtx";
import ConfirmEmail from "./views/Auth/Confirm";

export default function App() {
  return (
    <>
    <UserProvider>
      <Router>
        <Header />
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
            <Route path='/settings'>
              <ProfileForm />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
        </Switch>
      </Router>
    </UserProvider>
    </>
  )
}
