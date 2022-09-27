import {FC, useState} from "react";
import AuthorizationContent from "../../components/AuthorizationContent";
import AuthorizationCreateBtnGroup from "../../components/AuthorizationCreateBtnGroup";

const AuthorizationPage: FC = () => {

  const [isAccount, setIsAccount] = useState(false)

  return (
      <div className={'h-full flex justify-between items-stretch'}>
        <div></div>
        <AuthorizationContent
            children={!isAccount ? <AuthorizationCreateBtnGroup setIsAccount={setIsAccount}/> : undefined}
        />
      </div>
  );
}

export default AuthorizationPage