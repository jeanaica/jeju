import { Routes, Route } from "react-router-dom";

import "./App.scss";

import Faqs from "components/Faqs";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
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
        <Route path="/faq" element={<Faqs />} />
        <Route path="/wedding" element={<Location />} />
        <Route path="/contact-us" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
