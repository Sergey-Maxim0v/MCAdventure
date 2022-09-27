import {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import AuthorizationPage from "./blocks/AuthorizationPage";
import MainLayout from "./components/MainLayout";
import {ROUTES} from "./constants/routes";
import HomePage from "./blocks/HomePage";
import AccountPage from "./blocks/AccountPage";
import ErrorPage from "./blocks/ErrorPage";

const App: FC = () => {
  return (
      <MainLayout >
        <Routes>
          <Route path={ROUTES.authorisation} element={<AuthorizationPage/>}/>
          <Route path={ROUTES.home} element={<HomePage/>}/>
          <Route path={ROUTES.account} element={<AccountPage/>}/>
          <Route path={ROUTES.error} element={<ErrorPage/>}/>
        </Routes>
      </MainLayout>
  );
}

export default App;
