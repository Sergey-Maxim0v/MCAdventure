import {FC} from "react";
import {IHomeCard} from "./types";
import CustomButton from "../CustomButton";
import CardTitle from "./components/CardTitle";

const HomeCard: FC<IHomeCard> = ({card}) => (
    <div
        className={'m-2 w-64 h-72 box-border flex flex-col justify-between items-stretch rounded-xl border-r border-l border-t border-lime-700 border-dashed bg-[#181A20]'}
    >
      <CardTitle card={card}/>

      <CustomButton width={'full'}> Играть</CustomButton>


    </div>
)

export default HomeCard