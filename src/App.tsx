import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { BaseData } from "./components/Register/BaseData/BaseData";
import { Register } from "./pages/Register/Register";
import { ExtraData } from "./components/Register/ExtraData/ExtraData";
import { CheckNumber } from "./components/Register/CheckNumber/CheckNumber";
import { Finish } from "./components/Register/Finish/Finish";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Register/>}>
          <Route path={""} element={<BaseData/>}/>
          <Route path={"check"} element={<CheckNumber/>}/>
          <Route path={"extra"} element={<ExtraData/>}/>
          <Route path={"finish"} element={<Finish/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;