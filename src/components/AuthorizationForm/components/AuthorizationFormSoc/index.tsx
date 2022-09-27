import {FC} from "react";
import LinkVK from "../../../LinkVK";

const AuthorizationFormSoc: FC = () => (
    < div
        className={'w-full'}
    >
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
    </div>
)

export default AuthorizationFormSoc