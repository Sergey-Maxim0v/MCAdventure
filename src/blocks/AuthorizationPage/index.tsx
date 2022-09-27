import {FC, useState} from "react";
import AuthorizationContent from "../../components/AuthorizationContent";
import AuthorizationCreateBtnGroup from "../../components/AuthorizationCreateBtnGroup";
import AuthorizationForm from "../../components/AuthorizationForm";
import RegistrationForm from "../../components/RegistrationForm";
import AuthorizationFormHeader from "../../components/AuthorizationFormHeader";

const AuthorizationPage: FC = () => {

  const [isAccount, setIsAccount] = useState(true)

  return (
      <div className={'h-full flex justify-between items-stretch'}>
        <div
            className={'h-full w-[48.5%] pt-[56px] pb-[54px] pr-[78px] pl-[74px]'}
        >
          <AuthorizationFormHeader/>

          {isAccount ? <AuthorizationForm/> : <RegistrationForm/>}
        </div>
        <AuthorizationContent
            children={isAccount ? <AuthorizationCreateBtnGroup setIsAccount={setIsAccount}/> : undefined}
        />
      </div>
  );
}

export default AuthorizationPage