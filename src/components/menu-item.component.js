import React from 'react';

import './menu-item.style.scss';



const MenuItem = ({ title, imageUrl }) => (
    <div style={{ flex: 1}}>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className='menu-item'>
        
        </div>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>ADD TO CART</span>
            <img className='shopimage' src="https://image.freepik.com/fotos-gratis/carrinho-de-compras-de-papel-preto_23-2147930887.jpg" alt="shop" />
        </div>
    </div>
  


)

export default MenuItem;
