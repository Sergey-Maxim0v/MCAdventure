import {FC, useState} from "react";
import Navbar from "../../components/Navbar";
import {ACCOUNT_CURRENT_BLOCK} from "./types";
import AccountNavbar from "../../components/AccountNavbar";
import AccountingUser from "../../components/AccountingUser";

const AccountingPage: FC = () => {
  const [currentBlock, setCurrentBlock] = useState<ACCOUNT_CURRENT_BLOCK>(ACCOUNT_CURRENT_BLOCK.user)

  return (
      <div>
        <Navbar page={'account'}/>
        <div className={'w-full h-full relative flex items-center'}>
          <AccountNavbar currentBlock={currentBlock} setCurrentBlock={setCurrentBlock}/>
          <AccountingUser/>
        </div>
      </div>
  );
}

export default AccountingPage