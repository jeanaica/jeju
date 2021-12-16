import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="link1" element={<Link1 />} />
        <Route path="link2" element={<Link2 />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="link1">Link 1</Link> | <Link to="link2">Link 2</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function Link1() {
  return <h1>Link1</h1>;
}

function Link2() {
  return <h1>Link2</h1>;
}

export default App;
