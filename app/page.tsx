"use client";
import {useState, useEffect} from 'react';
import getNames from './components/utils'
import Header from './components/Header';
import Score from './components/Score';
import Card from './components/Card';

interface Card {
  name: string;
  id: string;
  imgSrc: string;
  isClicked: boolean;
}

export default function Home() {
  const [cards, setCards] = useState<Card[]>([]);
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let ignore = false;
    getNames(5).then((data) => {
      if (!ignore) {
        const initialCards = data.map((name) => ({
          name: name.name,
          id: name.id,
          imgSrc: name.imgSrc,
          isClicked: false
        }));
        setCards(shuffleCards(initialCards)); // Shuffle initial cards
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  const shuffleCards = (cardsToShuffle: Card[]) => {
    const shuffledCards = [...cardsToShuffle];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    return shuffledCards;
  }

  const handleClick = (id: string) => {
    setCards(prevCards => {
      const card = prevCards.find(card => card.id === id);
      
      if (card?.isClicked) {
        setScore(0);
        return prevCards.map(card => ({ ...card, isClicked: false }));
      }
      
      const updatedCards = prevCards.map(card => 
        card.id === id ? { ...card, isClicked: true } : card
      );
      
      setScore(prev => prev + 1);
      setHighScore(prev => Math.max(prev, score + 1));
      
      return shuffleCards(updatedCards);
    });
  }

  return (
    <>
      <Header/>
      <Score highScore={highScore} score={score}/>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        padding: '2rem',

      }}>
        {cards.map((card) => (
          <Card 
            key={card.id} 
            id={card.id} 
            name={card.name} 
            src={card.imgSrc}
            onClick={handleClick} 
          />
        ))}
      </div>
    </>
  )
}