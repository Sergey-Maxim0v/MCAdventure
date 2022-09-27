import {FC} from "react";
import {INavigationButton} from "./types";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../constants/routes";

const NavigationButton: FC<INavigationButton> = ({link, isActive}) => {

  const url = ROUTES[link]

  return (
      <Link to={url} className={'font-semibold'}>
        {link}
      </Link>
  );
}

export default NavigationButton