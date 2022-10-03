import {FC} from "react";
import {ICardDate} from "./types";
import classNames from "classnames";
import styles from './styles.module.scss'

const CardDate: FC<ICardDate> = ({card}) => (
    <div
        className={classNames('w-full rounded-sm flex justify-between items-center',styles.title)}
    >
      <p
          className={'px-4 h-full w-full font-medium text-[9px] border-t border-b border-l border-dashed border-lime-700 flex items-center'}
      >
        Последний вайп
      </p>

      <p
          className={classNames('h-8 w-20 rounded-sm text-sm font-semibold flex items-center justify-center', styles.date)}
      >
        {card.date}
      </p>
    </div>
)

export default CardDate