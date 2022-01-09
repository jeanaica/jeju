import { useContext } from "react";

import AuthContext from "contexts/Auth/context";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
