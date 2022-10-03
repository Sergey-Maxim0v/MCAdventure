import {FC} from "react";
import {ROUTES, RoutesType} from "../../constants/routes";
import NavigationButton from "./components/NavigationButton";
import {useLocation} from "react-router-dom";

const Navigation: FC = () => {
  const {pathname} = useLocation()

  const linkList = Object.keys(ROUTES) as Array<keyof RoutesType>

  return (
      <div
          className={'z-40 w-full h-[60px] flex flex-nowrap items-center justify-around align-middle text-white uppercase opacity-70 hover:opacity-100 transition-opacity bg-[#181A20] '}>
        {linkList.map((link) => (
            <NavigationButton key={link} link={link} isActive={ROUTES[link] === pathname}/>
        ))}
      </div>
  );
}

export default Navigation
