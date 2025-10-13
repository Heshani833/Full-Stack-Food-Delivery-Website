import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<div>Add Items Page</div>} />
          <Route path="/list" element={<div>List Items Page</div>} />
          <Route path="/orders" element={<div>Orders Page</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
