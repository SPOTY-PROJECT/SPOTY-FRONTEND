import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import RegisterFirst from "./components/Register/RegisterFirst";
import Certification from "./components/Certification/Certification";
import Information from "./components/InformationReg/Information";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Register/>}>
          <Route path={""} element={<RegisterFirst/>}/>
          <Route path={"certification"} element={<Certification/>}/>
          <Route path={"information"} element={<Information/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
