import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const users = [
  {
    id: '01',
    name: 'John Deo',
    email: 'john@gmail.com',
    phone: '202-555-0163'
  },
  {
    id: '02',
    name: 'Brad Pitt',
    email: 'fightclud@gmail.com',
    phone: '202-555-0106'
  },
];
const joinList = [users, users];

const Products = () => {
  const updatedList = joinList.map((nestedItem, i) => {
    <li key={i}  className='shopProd_item wow fadeInUp'>
      <div className="shopProd_box">  
        <div className="shopProd_img">
            <figure className="shopProd_img_wrapper">
                <img src={nestedItem.imgs} alt={nestedItem.name} />
            </figure>
        </div>
        <div className="shopProd_detail">
            <h4 className="title">{nestedItem.name}</h4>
        </div>
      </div>
    </li>
  });
  return (
    <div>
      <ul>
        {updatedList}
      </ul>
    </div>
  );
}
export default Products;