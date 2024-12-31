import { useContext } from "preact/hooks";
import { GameContext } from "../../context/gameContext";

const Board = () => {
  const { cards } = useContext(GameContext);
  return (
    <div>
      {cards.map((card, cardIndex) => (
        <div key={cardIndex}>
          <div>{card.icon}</div>
          <div>{card.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Board;
