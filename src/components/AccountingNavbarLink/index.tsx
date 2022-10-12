import {FC} from "react";
import {IAccountingNavbarLink} from "./types";

import CustomButton from "../CustomButton";
import classNames from "classnames";

const AccountingNavbarLink: FC<IAccountingNavbarLink> = ({isActive, page, setCurrentPage}) => {

  return (
      <div
      className={classNames({'opacity-50':!isActive})}
      >
        <CustomButton
            width={150}
            onClick={() => setCurrentPage(page)}
        >
          {page}
        </CustomButton>
      </div>
  )
}

export default AccountingNavbarLink