import { NavLink, useHistory } from "react-router-dom";
import { useProfile } from "../../context/ProfileCtx";
import { useUser } from "../../context/UserCtx";
import { signOutUser } from "../../services/users";
import css from './Header.css';

function Header() {
  const { user, setUser, setProfile } = useUser();
  const history = useHistory();

  const handleLogOut = async () => {
    try {
      await signOutUser();
      setUser(null);
      // setProfile(null);
      history.replace('/');
    } catch (err) {
      throw new Error('failed to log out')
    }
  }

  return (
    // loading ? <h1>Loading..</h1> :
    <header>
      <div>
      <h1 onClick={() => history.push('/')}>Acme Inc</h1>
      </div>
      <section>
        {!user ? (
        <>
          <h4>Register or log in</h4>
          <nav>
          <NavLink to='/register'>Sign up</NavLink>
          <NavLink to='/login'>Log in</NavLink>
          </nav>
        </>
        
        )
          :
       ( 
        <>
        <h4>You are signed in as {user.email}</h4>
        <nav>
        <NavLink to='/profile' >Profile</NavLink> 
        <NavLink to='/settings'>Settings</NavLink> 
        <NavLink to='/' onClick={handleLogOut}>Log Out</NavLink> 
        {/* <button to='/' onClick={handleLogOut}>Log Out</button> */}
        </nav>
      </> 
        ) }
      </section>
    </header>
  )
}

export default Header;