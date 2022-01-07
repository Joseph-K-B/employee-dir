import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useProfile } from '../../context/ProfileCtx';
import { UserProvider, useUser } from "../../context/UserCtx";
import { getProfile } from '../../services/profiles'



function Profile() {
  const history = useHistory();
  const {user, profile, setProfile} = useUser();
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    try {
      const fetchProfile = async () => {
        const res = await getProfile();
        setProfile(res);
      }
      fetchProfile();
      setLoading(false);
    } catch(err) {
      profile ? console.log(profile) : history.push('/create')
      throw new Error('failed to fetch')
    }
  }, []);

  
  console.log(user, profile);

  return (
    loading ? <h1>Loading..</h1> :   
    <>
    <section>
      <h1>{profile.name}</h1>
      <h4>{profile.email}</h4>
      <h6>{profile.birthday}</h6>
      <p>{profile.bio}</p>
        <Link to='/settings'>Edit</Link>
    </section>
    </>
  );
};

export default Profile;