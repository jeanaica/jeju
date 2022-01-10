import { AuthProvider } from "contexts/Auth/AuthProvider";
import useAuth from "hooks/useAuth";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  BrowserRouter,
} from "react-router-dom";

import "./App.scss";

import Loading from "components/Loading";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Location from "./pages/Location";
import Story from "./pages/Story";
import Confirmation from "./pages/Confirmation";
import Faqs from "./pages/Faqs";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();

  const { authenticated, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (!authenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:id" element={<Landing />} />
          <Route
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/story" element={<Story />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/wedding" element={<Location />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/rsvp" element={<Confirmation />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
