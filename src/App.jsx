import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Auth from './components/auth';
import Repository from "./components/repositories";
import Sidebar from "./components/sidebar";
import Home from "./components/home";

export default function App() {
  const [state, setState] = useState(false); // Define the state if it's not defined yet
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        
        {/* Dashboard Route */}
        <Route
          path="/Dashboard"
          element={
            <>
              <div className="flex flex-col md:flex-row">
                <Sidebar />
                <div
                  className={`w-full md:relative md:w-[88%] md:top-0 top-[5rem] ${
                    state && "md:blur-none blur-sm"
                  }`}
                >
                  <Repository />
                </div>
              </div>
            </>
          }
        />
        
      </Routes>
    </Router>
  );
}
