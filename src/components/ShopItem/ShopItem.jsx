import './ShopItem.css'

export const ShopItem = ({item, key}) =>  {
  return (
    <div className='item'>
      <img src = { item.img } alt = {item.name} />
      <h2 className='item__title'>{item.name}</h2>
      <p className='item__subtitle'>{item.color}</p>
      <span className='item__price'>${item.price}</span>
      <button className='item__button'>Add to Cart</button>
    </div>
  )
}
