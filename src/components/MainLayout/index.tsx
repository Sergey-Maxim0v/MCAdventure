import {FC} from "react";
import {IMainLayout} from "./types";
import Navigation from "../Navigation";
import styles from './styles.module.scss'
import classNames from "classnames";

const MainLayout: FC<IMainLayout> = ({children}) => (
    <div style={{fontFamily: 'Montserrat'}} className={'w-full h-screen flex flex-col items-center justify-center'}>
      <Navigation/>

      <div className={'w-full flex flex-grow items-center justify-center box-border'}>
        <div
            className={classNames(
                'w-[971px]  rounded-[32px] text-white relative border bg-[#14161C]',
                styles.mainLayout
            )}>
          {children}
        </div>
      </div>
    </div>
)

export default MainLayout
