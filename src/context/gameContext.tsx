import { ComponentChildren, createContext } from "preact";
import { useState } from "preact/hooks";

import type { Card } from "../utils/types";
import { AVIABLE_CARD, UNIQUE_CARDS } from "../utils/constants";

type GameState = {
    cards: Card[];
    player1Score: number;
    player2Score: number;
};

type GameProviderProps = {
    children: ComponentChildren;
}

const generateCards = () => {
    return UNIQUE_CARDS.concat(UNIQUE_CARDS).map((card) => ({ ...card, owner: AVIABLE_CARD })) as Card[];
}

const shuffleCards = (cards: Card[]) => {
    return cards.sort(() => Math.random() - 0.5);
}

export const GameContext = createContext<GameState>(null!);

const GameProvider = ({ children}: GameProviderProps) => {
    const [cards, setCards] = useState(shuffleCards(generateCards()));
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);

    return <GameContext.Provider
        value={{
            cards,
            player1Score,
            player2Score
        }}
    >
        {children}
    </GameContext.Provider>
}

export default GameProvider;
