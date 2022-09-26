import React from 'react';
import {Route, Routes} from "react-router-dom";
import AuthorizationPage from "./blocks/AuthorizationPage";
import RegistrationPage from "./blocks/RegistrationPage";

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<AuthorizationPage/>}/>
        <Route path={'/registration'} element={<RegistrationPage/>}/>
      </Routes>
  );
}

export default App;
