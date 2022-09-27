import {FC} from "react";
import {IAuthorizationCreateBtnGroup} from "./types";
import CustomButton from "../CustomButton";

const AuthorizationCreateBtnGroup: FC<IAuthorizationCreateBtnGroup> = ({setIsAccount}) => {
  return (
      <div
          className={'w-full h-full flex flex-col items-center justify-between'}
      >
        <p
            className={'font-bold'}
        >
          Нету аккаунта?
        </p>
        <CustomButton
            width={255}
        >
          Создать аккаунт
        </CustomButton>
      </div>
  );
}

export default AuthorizationCreateBtnGroup
