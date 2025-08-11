import { Link } from 'react-router-dom'
import './allProduct.css'


import React from 'react'

function AllProduct({p_name, new_price, old_price, image, onClick}) {
  return (
    <div>
        <div className="product-card">
         <div onClick={onClick}>
              <div className="image-wrapper">
                <img src={image} alt={p_name} />
                <span className="favorite-icon">❤</span>
              </div>
              <p className="product-name">{p_name}</p>
              <div className="product-price">
              <p className="product-price-new">{new_price}</p>
              <p className="product-price-old">{old_price}</p>
              </div>
              </div> 
              <button className="add-to-cart">Add to Cart</button>
            </div>
    </div>
  )
}

export default AllProduct