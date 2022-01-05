import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./views/Auth/Auth";
import ProfileForm from "./components/ProfileForm/ProfileForm";
import Profile from "./views/Profile/Profile";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
            <Route exact path= '/'>
            <h1>Hello World</h1>
            </Route>
            <Route path='/register'>
            <Auth />
            </Route>
            <Route path='/login'>
            <Auth />
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
    </>
  )
}
