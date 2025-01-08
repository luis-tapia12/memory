import { useContext } from "preact/hooks";
import { GameContext } from "../../context/gameContext";

const GameOvereMenu = () => {
	const { showGameOver, restart } = useContext(GameContext);
  return (
	showGameOver && <div className="menu">
	  <h1>GAME OVER</h1>
		<div>
			<button onClick={restart}>RESTART</button>
		</div>
	</div>
  )
}

export default GameOvereMenu
