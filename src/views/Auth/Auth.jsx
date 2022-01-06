import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useUser } from "../../context/UserCtx";
import { signInUser, signUpUser } from "../../services/users";
import { getProfile } from '../../services/profiles'


function Auth({ registerRequired = false }) {
  const history = useHistory();
  const { user, setUser } = useUser();

 
  const handleSubmit = async (email, password) => {
    try {
      if(registerRequired) {
        signUpUser(email, password);
        history.replace('/confirm-email');
      } else {
        const user = await signInUser(email, password);
        setUser({id: user.id, email});
        const profile = await getProfile();
        console.log(profile)
        profile.name ? history.push('/profile') : history.push('/settings');
      }
    } catch(err) {
      throw err;
    }
  };

  console.log(registerRequired)
  return (
    <>
    <h1>{registerRequired ? 'Sign up' : 'Log in'}</h1>
    <AuthForm onSubmit={handleSubmit}/>
    </>
  )
}

export default Auth;