import {FC} from "react";
import {HOME_CARDS_DATA} from "../../constants/homeCardsData";
import HomeCard from "../HomeCard";

const HomeContent: FC = () => {
  return (
      <div
          className={'p-8 flex flex-wrap justify-between items-center'}
      >
        {HOME_CARDS_DATA.map(card => (
            <HomeCard key={card.id} card={card}/>
        ))}
      </div>
  );
}

export default HomeContent
