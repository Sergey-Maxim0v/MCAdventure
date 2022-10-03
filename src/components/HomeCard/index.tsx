import {FC} from "react";
import {IHomeCard} from "./types";
import classNames from "classnames";
import styles from './styles.module.scss'
import CardButtons from "./components/CardButtons";
import CustomButton from "../CustomButton";

const HomeCard: FC<IHomeCard> = ({card}) => (
    <div
        className={'m-2 w-64 h-72 box-border flex flex-col justify-between items-stretch rounded-xl border-r border-l border-t border-lime-700 border-dashed bg-[#181A20]'}
    >
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

      <CustomButton width={'full'}> Играть</CustomButton>
    </div>
)

export default HomeCard