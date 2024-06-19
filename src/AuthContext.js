import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [is_active, setIsActive] = useState(false); // State to track if user is active

  return (
    <AuthContext.Provider value={{ is_active, setIsActive }}>
      {children}
    </AuthContext.Provider>
  );
};
