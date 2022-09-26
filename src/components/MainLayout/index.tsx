import {FC} from "react";
import {IMainLayout} from "./types";
import Navigation from "../Navigation";

const MainLayout: FC<IMainLayout> = ({children}) => (
    <>
      <Navigation/>
      {children}
    </>
)

export default MainLayout