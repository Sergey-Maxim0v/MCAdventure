import {FC} from "react";
import {INavbar} from "./types";
import NavbarTitle from "./components/NavbarTitle";
import NavbarButtons from "./components/NavbarButtons";

const Navbar: FC<INavbar> = ({page}) => {
  return (
      <div
          className={'relative h-28 rounded-[32px] box-border px-64 flex items-center justify-center bg-[#181A20]'}
      >
        <NavbarTitle/>

        <NavbarButtons page={page}/>
      </div>
  )
}

export default Navbar
