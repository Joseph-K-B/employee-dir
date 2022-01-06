import { useHistory } from "react-router-dom";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { useUser } from "../../context/UserCtx";
import { createProfile, getProfile, updateProfile } from "../../services/profiles";


function ProfileSettings() {
  const history = useHistory();
  const { user, setUser } = useUser();

  const handleSubmit = async (name, email, bio, birthday) => {
    try {
      if(!user.name) {
        // const email = user.email
        console.log(user.email);
        createProfile(name, email, bio, birthday);
        setUser({id: user.id, name, email, birthday, bio})        
      } else {
        updateProfile(name, birthday, bio);
      }
      history.replace('/profile');
    } catch(err) {
      throw err;
    }
  };  

  return(
    <>
      <h1>{user.name ? 'Edit Profile' : 'Create Profile'}</h1>
      <ProfileForm onSubmit={handleSubmit} />
      <button onClick={() => console.log(user)}>Test 1</button>
      <button onClick={() => console.log(getProfile())}>Test 2</button>
    </>
  )
}

export default ProfileSettings;