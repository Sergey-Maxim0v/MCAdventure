import {ACCOUNT_CURRENT_BLOCK} from "../../blocks/AccountPage/types";
import {Dispatch, SetStateAction} from "react";

export interface IAccountNavbar {
  currentBlock: ACCOUNT_CURRENT_BLOCK
  setCurrentBlock: Dispatch<SetStateAction<ACCOUNT_CURRENT_BLOCK>>
}