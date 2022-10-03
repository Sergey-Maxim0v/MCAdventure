import {FC} from "react";
import classNames from "classnames";
import Navbar from "../../components/Navbar";

const AccountingPage: FC = () => {
  return (
      <div className={classNames('')}>
        <Navbar page={'account'}/>
        <div>content</div>
      </div>
  );
}

export default AccountingPage