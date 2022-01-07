import { useHistory } from "react-router-dom";
import { useState } from "react";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { useUser } from "../../context/UserCtx";
import { createProfile, getProfile, updateProfile } from "../../services/profiles";


function ProfileSettings({createRequired = false}) {
  const history = useHistory();
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (name, email, bio, birthday) => {
    try {
      if(!user.name) {
        createProfile(name, email, bio, birthday);
        setUser({id: user.id, name, email, birthday, bio})        
      } else {        
        updateProfile(name, email, bio, birthday);
        setUser({id: user.id, name, email: user.email, birthday, bio})
        setLoading(true)
      }
      history.replace('/profile');
    } catch(err) {
      throw err;
    }
  };  

  return(
    loading ? <h1>Loading</h1> :
    <>
      <h1>{user.name ? 'Edit Profile' : 'Create Profile'}</h1>
      <ProfileForm onSubmit={handleSubmit} />
    </>
  )
}

export default ProfileSettings;