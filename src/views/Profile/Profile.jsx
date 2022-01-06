import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserCtx";
import { getProfile } from '../../services/profiles'


function Profile() {
  const { user, setUser } = useUser();
  

useEffect(() => {
  const fetchProfile = async () => {
    await getProfile()
    .then(async (value) => {
    console.log(value)
    await setUser(value)}
    )
  }
 }, [])


  return (
    <>
    <section>
      {/* <h1>{user.name}</h1>
      <h4>{user.email}</h4>
      <h6>{user.DOB}</h6>
      <p>{user.bio}</p> */}
      <Link to='/settings'>Edit</Link>
      <button onClick={() => console.log(getProfile().then((value) => console.log(value)))}>Test</button>
    </section>
    </>
  )
}

export default Profile;