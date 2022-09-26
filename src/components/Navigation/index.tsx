import {FC} from "react";
import {ROUTES} from "../../constants/routes";
import NavigationButton from "./components/NavigationButton";

const Navigation: FC = () => {

  // TODO: достать url и по нему выделить нужный элемент
  const url = ''

  const linkList = Object.keys(ROUTES)

  return (
      <div className={'w-full h-[60px] flex flex-nowrap items-center justify-around align-middle text-white uppercase bg-[#181A20]'}>
        {linkList.map(link => <NavigationButton key={link} link={link} isActive={link === url}/>)}
      </div>
  );
}

export default Navigation