import classNames from "classnames";
import styles from "./styles.module.scss";
import {FC} from "react";

const NavbarTitle: FC = () => (
    <div
        className={'absolute left-4 flex items-center box-border'}
    >
      <div className={classNames('h-16 w-16', styles.logo)}/>
      <div
          className={'flex flex-col items-start pl-4'}
      >
        <p className={'font-semibold'}>Adventures</p>
        <p className={'font-semibold opacity-50'}>McAdventure.Net</p>
      </div>
    </div>
)

export default NavbarTitle