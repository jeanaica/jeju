import { ReactNode, useEffect, useMemo, useState } from "react";

import useLocalStorage from "hooks/useLocalStorage";
import useReadLocalStorage from "hooks/useReadLocalStorage";
import validateToken from "firebase/fetch";
import { logoutFirebase } from "firebase/authFirebase";

import AuthContext from "./context";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const localToken: string | null = useReadLocalStorage("token");
  const [token, setToken] = useLocalStorage<string | null>("token", localToken);

  const [loading, setLoading] = useState(false);

  const login = async (token?: string | null) => {
    setLoading(true);

    try {
      const validated = await validateToken(token);

      setToken(validated);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      throw new Error("Not authorized");
    }
  };

  const logout = async () => {
    setLoading(true);

    logoutFirebase();
    setTimeout(() => {
      setToken(null);
      setLoading(false);
    }, 500);
  };

  // check for active session
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      if (!localToken) {
        logout();
      } else if (localToken !== token) {
        login(token);
      }
      setLoading(false);
    }, 500);
  }, [localToken]);

  const memoedValue = useMemo(
    () => ({
      token,
      loading,
      authenticated: !!token,
    }),
    [token, loading]
  );

  return (
    <AuthContext.Provider
      value={{
        ...memoedValue,
        login,
        logout,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
