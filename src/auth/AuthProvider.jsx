import { useContext, createContext, useState} from "react";

const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [title, setTitle] = useState("Home|Badhon");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
// this file will handle all user auth related data even the dinamic title of the page
  const value = {
    loading,
    title,
    setTitle,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
