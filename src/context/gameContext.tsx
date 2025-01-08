import { ComponentChildren, createContext } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { AVIABLE_CARD, PLAYER_1, PLAYER_2, UNIQUE_CARDS } from '../utils/constants';
import type { Card, CardOwner } from '../utils/types';

type GameState = {
	cards: Card[];
	player1Score: number;
	player2Score: number;
	showMainMenu: boolean;
	showGameOver: boolean;
	turn: number;
	flipCard: (cardIndex: number) => void;
	restart: () => void;
};

type GameProviderProps = {
	children: ComponentChildren;
};

const generateCards = () => {
	return UNIQUE_CARDS.concat(UNIQUE_CARDS).map((card) => ({
		...card,
		owner: AVIABLE_CARD,
	})) as Card[];
};

const shuffleCards = (cards: Card[]) => {
	return cards.sort(() => Math.random() - 0.5);
};

export const GameContext = createContext<GameState>(null!);

const GameProvider = ({ children }: GameProviderProps) => {
	const [cards, setCards] = useState(shuffleCards(generateCards()));
	const [player1Score, setPlayer1Score] = useState(0);
	const [player2Score, setPlayer2Score] = useState(0);
	const [showMainMenu, setShowMainMenu] = useState(true);
	const [showGameOver, setShowGameOver] = useState(false);
	const [turn, setTurn] = useState<CardOwner>(PLAYER_1);
	const cardsUp = cards.filter((card) => card.show).length;
	const aviableCards = cards.filter((card) => card.owner === AVIABLE_CARD);

	useEffect(() => {
		if (!aviableCards.length) {
			setShowGameOver(true);
		}
	}, [aviableCards]);

	useEffect(() => {
		if (cardsUp === 2) {
			setTimeout(() => {
				let card1Index = -1;
				let card2Index = -1;
				cards.forEach((card, index) => {
					if (card.show) {
						if (card1Index === -1) {
							card1Index = index;
						} else {
							card2Index = index;
						}
					}
				});
				const nextCards = cards.map((card) => ({ ...card, show: false }));

				if (nextCards[card1Index].label === nextCards[card2Index].label) {
					if (turn == PLAYER_1) {
						setPlayer1Score((prev) => prev + 1);
					} else {
						setPlayer2Score((prev) => prev + 1);
					}
					nextCards[card1Index].owner = turn;
					nextCards[card2Index].owner = turn;
				} else {
					setTurn((prev) => (prev === PLAYER_1 ? PLAYER_2 : PLAYER_1));
				}

				setCards(nextCards);
			}, 1500);
		}
	}, [cardsUp]);

	const flipCard = (cardIndex: number) => {
		if (cardsUp !== 2 && cards[cardIndex].owner === AVIABLE_CARD) {
			const nextCards = [...cards];
			nextCards[cardIndex].show = !cards[cardIndex].show;
			setCards(nextCards);
		}
	};

	const restart = () => {
		setShowGameOver(false);
		setShowMainMenu(false);
		setCards(shuffleCards(generateCards()));
		setPlayer1Score(0);
		setPlayer2Score(0);
		setTurn(PLAYER_1);
	};

	return (
		<GameContext.Provider
			value={{
				cards,
				player1Score,
				player2Score,
				showGameOver,
				showMainMenu,
				turn,
				flipCard,
				restart,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export default GameProvider;
