import {FC} from "react";
import {INavbarButtons} from "./types";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../constants/routes";
import CustomButton from "../../../CustomButton";
import classNames from "classnames";


const linkStyle = 'font-semibold border-b-2 border-transparent hover:border-white transition leading-6'


const NavbarButtons: FC<INavbarButtons> = ({page}) => {

  return (
      <div className={'w-full flex items-center justify-around'}>

        {page === 'home'
            ?
            <CustomButton width={180}>Главная</CustomButton>
            :
            <Link to={ROUTES.home}>
              <div className={'w-44 flex justify-center'}>
                <p
                    className={classNames(linkStyle)}
                >
                  Главная
                </p>
              </div>
            </Link>
        }


        {page === 'account'
            ?
            <CustomButton width={240}>Личный кабинет</CustomButton>
            :
            <Link to={ROUTES.account}>
              <div className={'w-60 flex justify-center'}>

                <p
                    className={linkStyle}
                >
                  Личный кабинет
                </p>
              </div>
            </Link>
        }

      </div>
  );
}

export default NavbarButtons