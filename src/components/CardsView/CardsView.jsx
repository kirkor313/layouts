import './CardsView.css';
import  { ShopCard }  from '../ShopCard/ShopCard'

export const CardsView = ({ cards }) => {
  let indexCard = 0;

  return (
    <div className='cardsView'>
      {cards.map((card) => (
        <ShopCard card={card} key={indexCard++} />
      ))}
    </div>
  );
}
