import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Register/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
