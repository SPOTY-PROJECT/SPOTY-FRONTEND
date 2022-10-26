import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CheckEmail } from "./components/Register/CheckEmail/CheckEmail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<CheckEmail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;