import {FC} from "react";
import {IHomeCard} from "./types";
import CustomButton from "../CustomButton";
import CardTitle from "./components/CardTitle";
import CardButtons from "./components/CardButtons";
import CardDate from "./components/CardDate";
import CardProgress from "./components/CardProgress";

const HomeCard: FC<IHomeCard> = ({card}) => (
    <div
        className={'m-2 w-64 h-80 box-border flex flex-col justify-between items-stretch rounded-xl border-r border-l border-t border-lime-700 border-dashed bg-[#181A20]'}
    >
      <div
          className={'w-full h-full p-6 pb-4 flex flex-col justify-between items-center'}
      >
        <CardTitle card={card}/>

        <CardButtons card={card}/>

        <CardDate card={card}/>

        <CardProgress card={card}/>
      </div>

      <CustomButton width={'full'}> Играть</CustomButton>

    </div>
)

export default HomeCard