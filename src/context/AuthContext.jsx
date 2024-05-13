import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuth, setIsAuth] = useState(false);
  function toggle() {
    setIsAuth(!isAuth);
  }
     console.log(isAuth)
  return (
    <AuthContext.Provider value={{ isAuth, toggle }}>
      {children}
    </AuthContext.Provider>
  );
};


