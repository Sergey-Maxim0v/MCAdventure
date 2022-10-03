import {FC} from "react";
import styles from './styles.module.scss'
import classNames from "classnames";
import CustomButton from "../../components/CustomButton";
import {Link} from "react-router-dom";
import {ROUTES} from "../../constants/routes";

const ErrorPage: FC = () => {
  return (
      <div className={classNames(styles.row, 'w-full h-[646px] flex flex-col justify-around items-center py-32')}>
        <p className={'text-9xl font-black text-lime-500'}> Error 404 </p>
        <Link to={ROUTES.home}>
          <CustomButton width={220}>На главную</CustomButton>
        </Link>
      </div>
  );
}

export default ErrorPage