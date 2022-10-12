import {ACCOUNT_CURRENT_BLOCK} from "../../blocks/AccountPage/types";
import {Dispatch, SetStateAction} from "react";

export interface IAccountingNavbarLink {
  isActive:boolean
  page: ACCOUNT_CURRENT_BLOCK
  setCurrentPage: Dispatch<SetStateAction<ACCOUNT_CURRENT_BLOCK>>
}