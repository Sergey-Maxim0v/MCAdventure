import {FC} from "react";
import {INavigationButton} from "./types";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../constants/routes";

const NavigationButton: FC<INavigationButton> = ({link, isActive}) => {

  const url = ROUTES[link]

  console.log(isActive)

  return (
      <Link to={url} style={{fontFamily: 'Poppins'}} className={'font-semibold'}>
        {link}
      </Link>
  );
}

export default NavigationButton