import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useProfile } from '../../context/ProfileCtx';
import { UserProvider, useUser } from "../../context/UserCtx";
import { getProfile } from '../../services/profiles'



function Profile() {
  // const history = useHistory();
  const {profile, setProfile} = useProfile();
  const {user} = useUser();
  // console.log(user, profile);

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const res = await getProfile();
  //     setProfile(res);
  //   }
  // },[])

    // const profile = await getProfile();
    //     if(!profile) {
    //       history.push('/create')
    //     } else {
    //       history.push('/profile')
    //     }
  
  // profile ? history.replace('/create') : <>
return (   
    <>
    <section>
      <h1>{profile.name}</h1>
      <h4>{profile.email}</h4>
      <h6>{profile.birthday}</h6>
      <p>{profile.bio}</p>
        <Link to='/settings'>Edit</Link>
      {/* <button onClick={() => console.log('CLICK ON PROF FORM', user, profile)}>Test</button> */}
    </section>
    </>
  );
  {/* </> */}
};

export default Profile;