import {FC} from "react";
import AuthorizationFormSoc from "../AuthorizationForm/components/AuthorizationFormSoc";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import classNames from "classnames";
import styles from './styles.module.scss'
import {ROUTES} from "../../constants/routes";
import {Link} from "react-router-dom";
import {IRegistrationForm} from "./types";

const RegistrationForm: FC <IRegistrationForm>= ({setIsAccount}) => {

  return (
      <div
          className={' h-[420px] w-full flex flex-col justify-between items-start'}
      >
        <AuthorizationFormSoc message={'Регистрация через соц.сеть'}/>

        <CustomInput label={'Введите логин'}/>

        <CustomInput label={'Введите пароль'}/>

        <CustomInput label={'Введите почту'} type={'email'}/>

        <div
            className={'w-full h-auto flex justify-between'}
        >
          <Link to={ROUTES.home}>
            <CustomButton width={251}>
              Создать аккаунт
            </CustomButton>
          </Link>

          <CustomButton width={60} onClick={()=>setIsAccount(true)}>
            <div
                className={classNames('w-7 h-7', styles.buttonImg)}
            />
          </CustomButton>
        </div>

      </div>
  );
}

export default RegistrationForm

