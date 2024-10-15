import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/components/Nav";
import Main from './pages/components/Main';
import Login from './pages/components/Login';
import SignupSelection from "./pages/components/SignupSelect";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup-selection' element={<SignupSelection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;