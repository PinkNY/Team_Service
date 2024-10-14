import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/components/Nav";
import Main from './pages/components/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path='/Login' element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;