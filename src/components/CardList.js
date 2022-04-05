import React from 'react';
// import { useGame } from '../context/GameContext';
import Card from './Card';

export default function CardList({ player, cards }) {
  // const { deck } = useGame();
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.suit + card.value}
          // setSelectedCard={setSelectedCard}
          // selectedCard={selectedCard}
          player={player}
          // setFrom={setFrom}
          card={card}
        />
      ))}
    </div>
  );
}
