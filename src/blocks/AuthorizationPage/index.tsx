import {FC, useState} from "react";
import AuthorizationContent from "../../components/AuthorizationContent";
import AuthorizationCreateBtnGroup from "../../components/AuthorizationCreateBtnGroup";
import AuthorizationForm from "../../components/AuthorizationForm";
import RegistrationForm from "../../components/RegistrationForm";
import AuthorizationFormHeader from "../../components/AuthorizationFormHeader";
import classNames from "classnames";
import styles from './styles.module.scss'

const AuthorizationPage: FC = () => {

  const [isAccount, setIsAccount] = useState(true)

  return (
      <div className={'h-[646px] flex justify-between items-stretch'}>
        <div
            className={classNames(
                'h-full w-[48.5%] pt-[56px] pb-[54px] pr-[78px] pl-[74px]',
                styles.row
            )}
        >
          <AuthorizationFormHeader/>

          {isAccount ? <AuthorizationForm/> : <RegistrationForm setIsAccount={setIsAccount}/>}
        </div>
        <AuthorizationContent
            children={isAccount ? <AuthorizationCreateBtnGroup setIsAccount={setIsAccount}/> : undefined}
        />
      </div>
  );
}

export default AuthorizationPage