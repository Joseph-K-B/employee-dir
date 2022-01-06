import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserCtx";
import { getProfile } from '../../services/profiles'


function Profile() {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const fetchProfile = async () => {
      const userProfile = await getProfile();
      setUser(userProfile);
    }
    fetchProfile()
  }, []);

  return (
    <>
    <section>
      <h1>{user.name}</h1>
      <h4>{user.email}</h4>
      <h6>{user.birthday}</h6>
      <p>{user.bio}</p>
      <Link to='/settings'>Edit</Link>
    </section>
    </>
  );
};

export default Profile;