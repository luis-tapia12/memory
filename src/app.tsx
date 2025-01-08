import Board from './components/Board/Board';
import GameOvereMenu from './components/Menu/GameOvereMenu';
import MainMenu from './components/Menu/MainMenu';
import Score from './components/Score/Score';

export function App() {
	return (
		<>
			<MainMenu />
			<GameOvereMenu />
			<div className="game-container">
				<Score />
				<Board />
			</div>
			<span className="version">v{import.meta.env.VITE_APP_VERSION}</span>
		</>
	);
}
