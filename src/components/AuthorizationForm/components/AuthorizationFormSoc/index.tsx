import {FC} from "react";
import LinkVK from "../../../LinkVK";

const AuthorizationFormSoc: FC = () => (
    <>
      <p className={'mb-6 font-sm font-semibold'}>
        Войти через соц.сеть
      </p>
      <div className={'w-full flex'}>
        <LinkVK/>
        <LinkVK/>
        <LinkVK/>
        <LinkVK/>
        <LinkVK/>
      </div>
    </>
)

export default AuthorizationFormSoc