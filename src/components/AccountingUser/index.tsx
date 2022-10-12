import {FC} from "react";
import classNames from "classnames";
import styles from './styles.module.scss'
import CustomButton from "../CustomButton";

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
            <h4
                className={classNames('w-full px-14 font-semibold text-center', styles.pictureHead)}
            >
              Ваш скин
            </h4>

            <div
                className={classNames('w-40 h-56', styles.skin)}
            />
            <CustomButton width={'full'}>Изменить</CustomButton>
          </div>

          <div
              className={'w-1/2 pl-4 pr-6 py-4 flex flex-col items-start justify-around'}
          >
            <h4
                className={'font-semibold'}
            >
              Настройки персонажа
            </h4>

            <p
            className={'text-sm font-medium'}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>
  )
}

export default AccountingUser