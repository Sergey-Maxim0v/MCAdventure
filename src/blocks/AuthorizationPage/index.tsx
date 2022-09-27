import {FC, useState} from "react";
import AuthorizationContent from "../../components/AuthorizationContent";
import AuthorizationCreateBtnGroup from "../../components/AuthorizationCreateBtnGroup";
import AuthorizationForm from "../../components/AuthorizationForm";

const AuthorizationPage: FC = () => {

  const [isAccount, setIsAccount] = useState(true)

  return (
      <div className={'h-full flex justify-between items-stretch'}>
        {isAccount ? <AuthorizationForm/> : <div></div>}
        <AuthorizationContent
            children={isAccount ? <AuthorizationCreateBtnGroup setIsAccount={setIsAccount}/> : undefined}
        />
      </div>
  );
}

export default AuthorizationPage