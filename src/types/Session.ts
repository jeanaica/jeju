import User from "./User";

type Session = {
  user: User;
  uid: string | null;
  authenticated: boolean;
  loadingAuthState: boolean;
  error?: any;
  token: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  setLoadingAuthState: (isLoading: boolean) => void;
};

export default Session;
