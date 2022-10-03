import {FC} from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import {ICardTitle} from "./types";

const CardTitle: FC<ICardTitle> = ({card}) => (
    <div
        className={classNames(
            'w-full h-20 flex justify-center items-center rounded-lg font-bold ',
            styles.title
        )}
    >
      {card.title}
    </div>
)

export default CardTitle