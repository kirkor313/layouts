import './ShopCard.css'

export const ShopCard = ({card,key}) =>  {
  return (
    <div className='card'>
      <h2 className='card__title'>{card.name}</h2>
      <p className='card__subtitle'>{card.color}</p>
      <img src = { card.img } alt = {card.name} />
      <div className='card__buy-info'>
        <span className='card__price'>${card.price}</span>
        <button className='card__button'>Add to Cart</button>
      </div>
    </div>
  )
}
