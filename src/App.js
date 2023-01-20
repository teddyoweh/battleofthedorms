import React from "react";
import { Analytics } from '@vercel/analytics/react';

import Router from "./router";
import './styles/app.scss'
function App() {
  return (
<Router/>
      <Analytics />

  );
}

export default App;
