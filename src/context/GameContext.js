import { Children, createContext, useContext, useState } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  const [selectedCard, setSelectedCard] = useState();
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  return (
    <GameContext.Provider value={{ deck, setDeck, selectedCard, setSelectedCard, playerOneHand, setPlayerOneHand, playerTwoHand, setPlayerTwoHand, playerThreeHand, setPlayerThreeHand, from, setFrom, to, setTo }} >{children}</GameContext.Provider>
  );

};

const useGame = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGame must be within a GameProvider');
  }

  return context;
};

export { GameProvider, useGame };