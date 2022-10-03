import {FC} from "react";
import Navbar from "../../components/Navbar";
import classNames from "classnames";

const HomePage: FC = () => {
  return (
      <div className={classNames('')}>
        <Navbar page={'home'}/>
        <div>content</div>
      </div>
  );
}

export default HomePage