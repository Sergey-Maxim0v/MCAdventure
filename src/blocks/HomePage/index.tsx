import {FC} from "react";
import Navbar from "../../components/Navbar";
import classNames from "classnames";
import HomeContent from "../../components/HomeContent";

const HomePage: FC = () => {
  return (
      <div className={classNames('')}>
        <Navbar page={'home'}/>
        <HomeContent/>
      </div>
  );
}

export default HomePage