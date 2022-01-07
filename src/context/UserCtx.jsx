import { createContext, useContext, useState } from "react";
import { getUser } from "../services/users";

const UserCtx = createContext();

function UserProvider({ children }) {
  const activeUser = getUser();
  const [user, setUser] = useState(
    activeUser ? {id: activeUser.id, email: activeUser.email,} : {}
  );

  return <UserCtx.Provider value={{user, setUser}}>{children}</UserCtx.Provider>
};

const useUser = () => {
  const ctx = useContext(UserCtx);

  if(ctx === undefined) {
    throw new Error('useUser hook must be a child of the UserProvider');
  }

  return ctx;
};

export { UserCtx, UserProvider, useUser};