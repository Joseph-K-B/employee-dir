import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useUser } from "../../context/UserCtx";
import { getUser, signInUser, signUpUser } from "../../services/users";
import { getProfile } from '../../services/profiles'
import { useProfile } from "../../context/ProfileCtx";

function Auth({ registerRequired = false }) {
  const history = useHistory();
  const { user, setUser } = useUser();
  // const {profile, setProfile} = useProfile();

 
  const handleSubmit = async (email, password) => {
    try {
      if(registerRequired) {
        signUpUser(email, password);
        history.replace('/confirm-email');
      } else {
        const user = await signInUser(email, password);
        await setUser({id: user.id, email});
        const profile = await getProfile();
        await setUser(profile);
        user.name ? history.push('/profile') : history.push('/create')
        console.log(getProfile())
      }
    } catch(err) {
      throw err;
    }
    };
    
  return (
    <>
    <h1>{registerRequired ? 'Sign up' : 'Log in'}</h1>
    <AuthForm onSubmit={handleSubmit}/>
    </>
  )
}

export default Auth;