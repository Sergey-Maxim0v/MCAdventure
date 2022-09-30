import {FC} from "react";
import AuthorizationFormSoc from "../AuthorizationForm/components/AuthorizationFormSoc";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";

const RegistrationForm: FC = () => {

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
          <CustomButton width={251}>
            Создать аккаунт
          </CustomButton>

          <CustomButton width={60}>
            <div>Q</div>
          </CustomButton>

        </div>

      </div>
  );
}

export default RegistrationForm

