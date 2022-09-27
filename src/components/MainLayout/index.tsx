import {FC} from "react";
import {IMainLayout} from "./types";
import Navigation from "../Navigation";

const MainLayout: FC<IMainLayout> = ({children}) => (
    <div className={'w-screen h-screen flex flex-col'}>
      <Navigation/>

      <div className={'w-full flex flex-grow items-center justify-center box-border'}>
        <div className={'w-[971px] h-[646px] rounded-[32px] text-white relative bg-[#14161C]'}>
          {children}
        </div>
      </div>
    </div>
)

export default MainLayout
