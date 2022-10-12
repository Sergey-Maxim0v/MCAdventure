import {FC} from "react";
import {IAccountingNavbarLink} from "./types";
import classNames from "classnames";
import styles from './styles.module.scss'

const AccountingNavbarLink: FC<IAccountingNavbarLink> = ({isActive, page, setCurrentPage}) => {

  return (
      <button
          className={classNames(
              'px-4 py-2 w-full text-center items-center rounded-xl transition-all'
              ,
              {[styles.active]: isActive},
              {[styles.row]: !isActive}
          )}
          onClick={() => setCurrentPage(page)}
      >
        {page}
      </button>
  )
}

export default AccountingNavbarLink