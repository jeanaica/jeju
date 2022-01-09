export interface User {
  id: string;
  household: string;
  role: string;
  invited_by: string;
}

type AuthContextType = {
  token: string | null;
  authenticated: boolean;
  loading: boolean;
  error?: any;
  login: (token: string | null) => void;
  logout: () => void;
  setLoading: (isLoading: boolean) => void;
};

export default AuthContextType;
