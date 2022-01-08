// import { createContext, useContext, useState } from "react";
// import { getProfile } from "../services/profiles";
// import { useUser } from "./UserCtx";


// const ProfileCtx = createContext();

// function ProfileProvider({ children }) {
  // const {user} = useUser();
  //fetch profile info and assign it to variable
  // const activeProfile = getProfile()
  //create application state and assign corresponding key values
  //from fetch
  // const [profile, setProfile] = useState(
  //   activeProfile ? {
  //     id: activeProfile.id, 
  //     name: activeProfile.name, 
  //     email: activeProfile.email,
  //     bio: activeProfile.bio,
  //     birthday: activeProfile.birthday 
  //   } : {}
  //   );
    // 
    // useEffect(() => {}, []);

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const res = await getProfile()
  //       .then(value => setProfile(value))
  //     user ? setProfile(res) : null
  //   }
  //   fetchProfile();
  // }, [])

//   return <ProfileCtx.Provider value={{profile, setProfile}}>{children}</ProfileCtx.Provider>
// };

// const useProfile = () => {
//   const ctx = useContext(ProfileCtx);

//   if(ctx === undefined ) {
//     throw new Error ('useProfile hook may only be called within children of the profileCtx provoder');
//   } 
//   return ctx;
// }

// export {ProfileCtx, ProfileProvider, useProfile};