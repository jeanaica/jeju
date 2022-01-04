import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import "./App.scss";

import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Location from "./pages/Landing/Location";
import Story from "./pages/Story";

function App() {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/login" element={<div>Login</div>} />
      <Route element={<Layout />}>
        <Route path="/story" element={<Story />} />
        <Route path="/location" element={<Location />} />
      </Route>
    </Routes>
  );
}

export default App;
