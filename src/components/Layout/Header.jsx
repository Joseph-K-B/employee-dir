import { NavLink, useHistory } from "react-router-dom";
import { useProfile } from "../../context/ProfileCtx";
import { useUser } from "../../context/UserCtx";
import { signOutUser } from "../../services/users";
import css from './Header.css';

function Header() {
  const { user, setUser } = useUser();
  // const {profile, setProfile} = useProfile();
  const history = useHistory();

  const handleLogOut = async () => {
    await signOutUser();

    history.replace('/');
    setUser(null);
  }

  return (
    <header>
      <div>
      <h1>Acme Inc</h1>
      </div>
      <section>
        {user ? (
        <>
          <h4>You are signed in as {user.email}</h4>
          <nav>
          <NavLink to='/profile' >Profile</NavLink> 
          <NavLink to='/settings'>Settings</NavLink> 
          <button to='/' onClick={handleLogOut}>Log Out</button>
          </nav>
        </> )
          :
       ( <>
          <h4>Register or log in</h4>
          <nav>
          <NavLink to='/register'>Sign up</NavLink>
          <NavLink to='/login'>Log in</NavLink>
          </nav>
        </>) }
      </section>
    </header>
  )
}

export default Header;