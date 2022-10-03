import {FC} from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import CardButtons from "../CardButtons";
import {ICardTitle} from "./types";

const CardTitle: FC<ICardTitle> = ({card}) => (
    <div
        className={'w-full h-full p-6 pb-4 flex flex-col justify-between items-center'}
    >
      <div
          className={classNames(
              'w-full h-20 flex justify-center items-center rounded-lg font-bold ',
              styles.title
          )}
      >
        {card.title}
      </div>

      <CardButtons card={card}/>
    </div>
)

export default CardTitle