import {ACCOUNT_CURRENT_BLOCK} from "../AccountPage/types";
import AccountingUser from "../../components/AccountingUser";
import {FC} from "react";
import {IAccountingContent} from "./types";


const AccountingContent: FC<IAccountingContent> = ({currentBlock}) => {

  switch (currentBlock) {

    case ACCOUNT_CURRENT_BLOCK.user:
      return <AccountingUser/>

    case ACCOUNT_CURRENT_BLOCK.settings:
      return <AccountingUser/>

    case ACCOUNT_CURRENT_BLOCK.socLinks:
      return <AccountingUser/>

    default:
      return <AccountingUser/>
  }
}

export default AccountingContent