import { useContext } from "preact/hooks";
import { GameContext } from "../../context/gameContext";
import { PLAYER_1, PLAYER_2 } from "../../utils/constants";

const Score = () => {
  const { player1Score, player2Score, turn } = useContext(GameContext);
  return (
    <div className="score-container">
      <h1>PLAYERS</h1>
      <div className={turn === PLAYER_1 ? "active" : ""}>
        <div>PLAYER 1</div>
        <div className="score-value">{player1Score}</div>
      </div>
      <div className={turn === PLAYER_2 ? "active" : ""}>
        <div>PLAYER 2</div>
        <div className="score-value">{player2Score}</div>
      </div>
    </div>
  );
};

export default Score;
