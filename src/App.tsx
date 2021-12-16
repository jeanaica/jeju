import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import "./App.scss";

import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
