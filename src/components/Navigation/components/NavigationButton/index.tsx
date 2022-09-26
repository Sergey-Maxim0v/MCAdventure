import {FC} from "react";
import {INavigationButton} from "./types";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../constants/routes";

const NavigationButton: FC<INavigationButton> = ({link, isActive}) => {

  // TODO:
  // @ts-ignore
  const url = ROUTES[link] ?? ROUTES.error
  console.log(url)

  return (
      <Link to={url} style={{fontFamily: 'Poppins'}} className={'font-semibold'}>
        {link}
      </Link>
  );
}

export default NavigationButton