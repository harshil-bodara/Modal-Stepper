import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Routes
import { mainRoutes } from './layout/Routes';

import "./assets/sass/main.scss";

// Notfound
import NotFound from "./pages/404";

function App() {

  return (
    <React.Fragment>
      <BrowserRouter >
        <Routes>
          {mainRoutes.map((prop, i) => (
            <Route path={prop.path} element={prop.component} key={i} />
            ))}
            <Route path={"*"} element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
