import { useContext } from "preact/hooks";
import { GameContext } from "../../context/gameContext";

const Score = () => {
  const { player1Score, player2Score } = useContext(GameContext);
  return (
    <div className="score-container">
      <h1>PLAYERS</h1>
      <div>
        <div>PLAYER 1</div>
        <div className="score-value">{player1Score}</div>
      </div>
      <div>
        <div>PLAYER 2</div>
        <div className="score-value">{player2Score}</div>
      </div>
    </div>
  );
};

export default Score;
