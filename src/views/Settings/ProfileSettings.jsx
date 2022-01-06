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
        createProfile(name, email, bio, birthday);
        setUser({id: user.id, name, email, birthday, bio})        
      } else {        
        updateProfile(name, email, birthday, bio);
        setUser({id: user.id, name, email: user.email, birthday, bio})
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
    </>
  )
}

export default ProfileSettings;