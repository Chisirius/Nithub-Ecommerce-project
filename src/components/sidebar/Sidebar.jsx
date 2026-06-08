import categories from '../../features/products/data/allCategories'
import './Sidebar.css'
import { ChevronRight } from 'lucide-react';

import React from 'react'

function Sidebar({activeCategory, onActiveCategory, }) {
  return (

  <div className='sidebar-container'> 
    <aside className="sidebar">
      <h1  className="sidebar-title">Categories</h1>
      <div className="sidebar-divider"></div>
     <ul className="category-list">
        <li
            className={`category-item ${!activeCategory ? "active" : ""}`}
            onClick={() => onActiveCategory("all")} 
        >
          <span>All Products</span>   
          {!activeCategory && 
          <ChevronRight size={18} className="category-arrow"/>
          }  
          </li>

        {categories.map((category)=> {
        return(
          <li 
            className={`category-item ${activeCategory===category? 'active': ''}`} 
            onClick={()=> onActiveCategory(category)} 
            key={category}
          >
           <span>{category}</span>  
           {activeCategory===category && <ChevronRight size={18} className="category-arrow" />}
          </li>
        )
      })}
      
     </ul>
    </aside>
  </div>
    
  )
}

export default Sidebar