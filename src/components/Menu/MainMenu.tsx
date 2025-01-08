import { useContext } from 'preact/hooks';
import { GameContext } from '../../context/gameContext';

const MainMenu = () => {
	const { showMainMenu, restart } = useContext(GameContext);
	return (
		showMainMenu && (
			<div className="menu">
				<h1>START GAME</h1>
				<div>
					<button onClick={restart}>START</button>
				</div>
			</div>
		)
	);
};

export default MainMenu;
