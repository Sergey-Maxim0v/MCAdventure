import {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import AuthorizationPage from "./blocks/AuthorizationPage";
import RegistrationPage from "./blocks/RegistrationPage";
import MainLayout from "./components/MainLayout";
import {ROUTES} from "./constants/routes";

const App: FC = () => {
  return (
      <MainLayout>
        <Routes>
          <Route path={ROUTES.authorisation} element={<AuthorizationPage/>}/>
          <Route path={ROUTES.registration} element={<RegistrationPage/>}/>
          <Route path={ROUTES.home} element={<RegistrationPage/>}/>
          <Route path={ROUTES.account} element={<RegistrationPage/>}/>
          <Route path={ROUTES.error} element={<RegistrationPage/>}/>
        </Routes>
      </MainLayout>
  );
}

export default App;
