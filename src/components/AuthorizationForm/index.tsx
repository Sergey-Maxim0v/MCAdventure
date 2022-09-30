import {FC} from "react";
import AuthorizationFormSoc from "./components/AuthorizationFormSoc";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";

const AuthorizationForm: FC = () => {

  return (
      <div
          className={'h-[420px] w-full flex flex-col justify-between items-start'}
      >
        <AuthorizationFormSoc message={'Войти через соц.сеть'}/>

        <CustomInput label={'Введите логин'}/>

        <CustomInput label={'Введите пароль'}/>

        <a
            className={'w-full text-center underline cursor-pointer'}
        >
          Забыли логин или пароль?
        </a>

        <CustomButton label={'Войти в аккаунт'} width={318}/>
      </div>
  );
}

export default AuthorizationForm

