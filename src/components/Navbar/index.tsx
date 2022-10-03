import {FC} from "react";
import {INavbar} from "./types";
import NavbarTitle from "./components/NavbarTitle";

const Navbar: FC<INavbar> = ({page}) => {

  return (
      <div
          className={'h-28 rounded-[32px] box-border px-8 flex items-center justify-between bg-[#181A20]'}
      >
        <NavbarTitle/>

      </div>
  )
}

export default Navbar
