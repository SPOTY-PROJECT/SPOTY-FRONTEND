import React from "react";
import { createRoot } from 'react-dom/client';

import { RecoilRoot } from "recoil";

import "style/common.scss";

import App from "App";
import reportWebVitals from "reportWebVitals";

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App/>
    </RecoilRoot>
  </React.StrictMode>

);

reportWebVitals();