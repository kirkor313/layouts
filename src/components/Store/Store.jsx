import { useState } from 'react';
import './Store.css';
import { IconSwitch } from '../IconSwitch/IconSwitch';
import { CardsView } from '../CardsView/CardsView';
import { ListView } from '../ListView/ListView';

export const Store = ({ products }) => {
  const [icon, setIcon] = useState('view_list');

  function handleSwitch() {
    switch(icon) {
      case 'view_list':
        return setIcon('view_module');
      case 'view_module':
        return setIcon('view_list');
    }
  }

  return (
    <div className='container'>
      <IconSwitch icon = { icon } onSwitch = { handleSwitch } />
      <main className='main'>
        {icon === 'view_list' ? <CardsView cards = { products } /> : <ListView items = { products } /> }
      </main>
    </div>
  );
}