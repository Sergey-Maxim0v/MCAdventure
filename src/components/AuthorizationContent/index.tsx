import {FC} from "react";
import {IAuthorizationContent} from "./types";
import styles from './styles.module.scss'
import classNames from "classnames";

const AuthorizationContent: FC<IAuthorizationContent> = ({children}) => (
    <div
        className={classNames(
            'h-full w-[51.5%] rounded-[31px] flex flex-col items-center justify-between pt-[65px] pb-[55px]'
            , styles.row
        )}
    >

      <div
          className={classNames('w-[200px] h-[200px]', styles.logo)}
      ></div>

      <h1
          className={classNames('font-semibold text-3xl', styles.title)}
      >
        MCAdventure
      </h1>

      <p
          className={'w-4/5 text-center font-medium'}
      >
        Сервера с Вампирами, свои разработки (по игре), стабильность, частые обновления, добрая администрация
      </p>

      <div className={'w-full h-[100px] box-border relative flex flex-col'}>
        {children}
      </div>
    </div>
)

export default AuthorizationContent
