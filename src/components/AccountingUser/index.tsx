import {FC} from "react";
import classNames from "classnames";
import styles from './styles.module.scss'

const AccountingUser: FC = () => {
  return (
      <div
          className={'w-full p-16 flex justify-center items-center'}
      >
        <div
            className={classNames('w-[546px] h-80 rounded-3xl flex', styles.row)}
        >
          <div
              className={classNames(
                  'w-1/2 pt-6 rounded-3xl flex flex-col justify-between items-center',
                  styles.row
              )}
          >

          </div>

        </div>
      </div>
  )
}

export default AccountingUser