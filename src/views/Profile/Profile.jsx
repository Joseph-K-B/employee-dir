import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserCtx";
import { getProfile } from '../../services/profiles'


function Profile() {
  const { user, setUser } = useUser();
  const [userProfile, setUserProfile] = useState({})
  const [loading, setLoading] = useState(true);
  

useEffect(() => {
  const fetchProfile = async () => {
    const userProfile = await getProfile();
    // .then(async (value) => {
    // console.log(value)
    // setUserProfile({value})}
    // setUserProfile(userProfile);
    setUser(userProfile);
    // )
    // .finally(
    //   setLoading(false)
    // )
  }
  fetchProfile()
 }, [])

//  console.log(userProfile)
 console.log(user)

  return (
    <>
    <section>
      <h1>{user.name}</h1>
      <h4>{user.email}</h4>
      <h6>{user.DOB}</h6>
      <p>{user.bio}</p>
      {/* <h1>{userProfile.name}</h1>
      <h4>{userProfile.email}</h4>
      <h6>{userProfile.DOB}</h6>
      <p>{userProfile.bio}</p> */}
      <Link to='/settings'>Edit</Link>
      <button onClick={() => console.log(getProfile().then((value) => console.log(value)))}>Test</button>
      <button onClick={() => console.log(userProfile)}>Test</button>
    </section>
    </>
  )
}

export default Profile;