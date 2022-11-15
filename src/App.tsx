import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import RegisterFirst from "./components/Register/RegisterFirst";
import Certification from "./components/Certification/Certification";
import Information from "./components/InformationReg/Information";
import Complete from "./components/RegComplete/Complete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Register/>}>
          <Route path={""} element={<RegisterFirst/>}/>
          <Route path={"certification"} element={<Certification/>}/>
          <Route path={"information"} element={<Information/>}/>
          <Route path={"Complete"} element={<Complete/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
