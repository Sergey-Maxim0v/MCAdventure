import classNames from "classnames";
import styles from "./styles.module.scss";
import {FC} from "react";

const AuthorizationFormHeader: FC = () => (
    <div
        className={'w-full h-[90px] flex items-center justify-start mb-6'}
    >
      <div
          className={classNames('w-[82px] h-[82px]', styles.logo)}
      />

      <div className={'flex flex-col h-full justify-center pl-6 uppercase'}>
        <p className={'text-2xl font-bold'}>Авторизация</p>
        <p className={'text-sm font-medium'}>MCADVENTURE</p>
      </div>
    </div>
)

export default AuthorizationFormHeader