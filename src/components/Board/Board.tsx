import { useContext } from "preact/hooks";
import { GameContext } from "../../context/gameContext";

const Board = () => {
  const { cards } = useContext(GameContext);
  return (
    <div className="board">
      {cards.map((card, cardIndex) => (
        <button key={cardIndex} className={`card ${card.show && "show"}`}>
          <span>{card.icon}</span>
          <span>{card.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Board;
