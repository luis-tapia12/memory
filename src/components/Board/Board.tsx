import { useContext } from "preact/hooks";
import { GameContext } from "../../context/gameContext";

const classNames = (classes: (string | undefined | false)[]) => {
  return classes.filter((currClass) => currClass).join(' ');
}

const Board = () => {
  const { cards, flipCard } = useContext(GameContext);
  return (
    <div className="board">
      {cards.map((card, cardIndex) => (
        <button
          key={cardIndex}
          className={classNames(['card', card.show && 'show', !!card.owner && 'unaviable'])}
          onClick={flipCard.bind(this, cardIndex)}
        >
          <span>{card.icon}</span>
          <span>{card.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Board;
