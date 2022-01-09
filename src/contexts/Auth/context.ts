import { createContext } from "react";
import AuthContextType from "./types";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
