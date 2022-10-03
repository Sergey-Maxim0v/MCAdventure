import {FC} from "react";
import {ICardProgress} from "./types";
import classNames from "classnames";
import styles from './styles.module.scss'

const CardProgress: FC<ICardProgress> = ({card}) => {
  const progressWidth = `${card.progress / 15}%`

  return (
      <div
          className={'h-10 w-full box-border flex flex-col items-center justify-around'}
      >
        <div
            className={'w-full flex items-center justify-between'}
        >
          <p>
            <span className={'font-semibold'}>{`${card.progress} `}</span>
            <span className={'text-sm'}>/ 1500</span>
          </p>

          <div className={classNames('w-5 h-4', styles.logo)}/>
        </div>
        <div
            className={classNames('h-1.5 w-full rounded-full flex items-stretch justify-start ', styles.progress)}
        >
          <div
              style={{width: progressWidth}}
              className={classNames('rounded-full', styles.active)}
          />
        </div>
      </div>
  );
}

export default CardProgress