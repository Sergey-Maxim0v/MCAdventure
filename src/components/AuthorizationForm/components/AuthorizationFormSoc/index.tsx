import {FC} from "react";
import LinkVK from "../../../LinkVK";
import {IAuthorizationFormSoc} from "./types";

const AuthorizationFormSoc: FC <IAuthorizationFormSoc>= ({message}) => (
    < div
        className={'w-full'}
    >
      <p className={'mb-4 text-sm font-semibold'}>
        {message}
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