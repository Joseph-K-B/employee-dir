import { createContext, useContext, useMemo, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getProfile } from "../services/profiles";
import { getUser } from "../services/users";

const UserCtx = createContext();

function UserProvider({ children }) {
  const activeUser = getUser();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(
    activeUser ? {profile: false, id: activeUser.id, email: activeUser.email,} : {}
  );
  const [profile, setProfile] = useState({})

  // const activeProfile = getProfile();
  // const [profile, setProfile] = useState(
  //   activeProfile ? {
  //     id: activeProfile.id, 
  //     name: activeProfile.name, 
  //     email: activeProfile.email,
  //     bio: activeProfile.bio,
  //     birthday: activeProfile.birthday
  // } : {} );

  const value = useMemo(() => ({ profile, setProfile}), [profile])

  // if(user) {
  //   useEffect(() => {
  //     const fetchProfile = async () => {
  //       try{
  //       const profile = await getProfile();
  //       setProfile({...profile})
  //       } catch (err) {
  //         throw Error(err);
  //       }
  //     }
  //     fetchProfile();
  //     profile ? setLoading(false) : history.push('/create')
  //   },[]) } else null
  
  return <UserCtx.Provider value={{user, setUser, profile, setProfile}}>{children}</UserCtx.Provider>
};

const useUser = () => {
  const ctx = useContext(UserCtx);

  if(ctx === undefined) {
    throw new Error('useUser hook must be a child of the UserProvider');
  }

  return ctx;
};

export { UserCtx, UserProvider, useUser};