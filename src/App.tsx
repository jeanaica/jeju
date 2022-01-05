import Faqs from "components/Faqs";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Location from "./pages/Location";
import Story from "./pages/Story";

function App() {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/login" element={<div>Login</div>} />
      <Route element={<Layout />}>
        <Route path="/story" element={<Story />} />
        <Route path="/location" element={<Location />} />
        <Route path="/faq" element={<Faqs />} />
      </Route>
    </Routes>
  );
}

export default App;
