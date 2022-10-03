import {FC} from "react";
import classNames from "classnames";
import styles from './styles.module.scss'
import {ICardButtons} from "./types";

const buttonStyles = 'w-14 h-10 rounded-lg flex items-center justify-center opacity-20'
const logoStyles = 'w-5 h-5'

const CardButtons: FC<ICardButtons> = ({card}) => (
    <div
        className={'w-full flex items-stretch justify-between'}
    >
      <div
          className={classNames(buttonStyles, styles.button, {[styles.active]: card.achievement1})}
      >
        <div className={classNames(logoStyles, styles.achievement1)}/>
      </div>

      <div
          className={classNames(buttonStyles, styles.button, {[styles.active]: card.achievement2})}
      >
        <div className={classNames(logoStyles, styles.achievement2)}/>
      </div>

      <div
          className={classNames(buttonStyles, styles.button, {[styles.active]: card.achievement3})}
      >
        <div className={classNames(logoStyles, styles.achievement3)}/>
      </div>
    </div>
)

export default CardButtons