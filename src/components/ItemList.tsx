import React, { useState, useRef } from 'react';
import { Restaurant } from '../utils/interfaces';
import '../styles/ItemList.css';
import Item from './Item';

interface Props {
  itemList: Restaurant[];
}

const ItemList: React.FC<Props> = props => {
  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {props.itemList.map(item => {
          return <Item key={item.id} restaurantItem={item} />;
        })}
      </ul>
    </section>
  );
};

export default ItemList;
