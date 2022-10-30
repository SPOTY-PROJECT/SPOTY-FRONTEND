import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { BaseData } from "./components/Register/BaseData/BaseData";
import { Register } from "./pages/Register/Register";
import { ExtraData } from "./components/Register/ExtraData/ExtraData";
import { CheckNumber } from "./components/Register/CheckNumber/CheckNumber";
import { Finish } from "./components/Register/Finish/Finish";
import { FindPassword } from "./components/Register/FindPassword/FindPassword";
import { NewPassword } from "./components/Register/NewPassword/NewPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Register/>}>
          <Route path={""} element={<BaseData/>}/>
          <Route path={"check"} element={<CheckNumber/>}/>
          <Route path={"extra"} element={<ExtraData/>}/>
          <Route path={"finish"} element={<Finish/>}/>
          <Route path={"find"} element={<FindPassword/>}/>
          <Route path={"make"} element={<NewPassword/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;