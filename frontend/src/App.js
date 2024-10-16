import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/components/Nav";
import Main from './pages/components/Main';
import Login from './pages/components/Login';
import SignupSelection from "./pages/components/SignupSelect";
import IndividualSignup from "./pages/components/IndividualSignup";
import BusinessSignup from "./pages/components/BusinessSignup";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup-selection' element={<SignupSelection />} />
        <Route path="/signup/individual" element={<IndividualSignup />} />
        <Route path='/signup/business' element={<BusinessSignup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;