import {FC} from "react";
import {IAccountNavbar} from "./types";
import {ACCOUNT_CURRENT_BLOCK} from "../../blocks/AccountPage/types";
import AccountingNavbarLink from "../AccountingNavbarLink";

const Links = [ACCOUNT_CURRENT_BLOCK.user, ACCOUNT_CURRENT_BLOCK.settings, ACCOUNT_CURRENT_BLOCK.socLinks]


const AccountNavbar: FC<IAccountNavbar> = ({currentBlock, setCurrentBlock}) => {

  return (
      <div
          className={'flex items-center w-fit h-full'}
      >
        <div
            className={'w-fit h-56 top-1/2 rounded-xl flex flex-col justify-around items-start '}
        >
          {Links.map(el => <AccountingNavbarLink
              key={el}
              isActive={currentBlock === el}
              page={el}
              setCurrentPage={setCurrentBlock}
          />)}
        </div>
      </div>
  )
}

export default AccountNavbar