import {FC} from "react";
import {INavigationButton} from "./types";

const NavigationButton: FC<INavigationButton> = ({link, isActive}) => {

  return <div>{link}</div>;
}

export default NavigationButton