import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserCtx";
import { signOutUser } from "../../services/users";
import css from './Header.css';

function Header() {
  const { user, setUser } = useUser();
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
          <NavLink to='/profile'>Profile</NavLink> 
          <NavLink to='/settings'>Settings</NavLink> 
          <NavLink to='/' onClick={async () => {await signOutUser(); setUser(null)}}>Log Out</NavLink>
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