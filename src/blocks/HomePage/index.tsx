import {FC} from "react";
import Navbar from "../../components/Navbar";

const HomePage: FC = () => {
  return (
      <div>
        <Navbar page={'home'}/>
        <div>content</div>
      </div>
  );
}

export default HomePage