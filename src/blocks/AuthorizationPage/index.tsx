import {FC} from "react";
import AuthorizationContent from "../../components/AuthorizationContent";

const AuthorizationPage: FC = () => (
    <div className={'h-full flex justify-between items-stretch'}>
      <div></div>
      <AuthorizationContent/>
    </div>
)

export default AuthorizationPage