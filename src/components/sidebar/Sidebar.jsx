import categories from '../assets/allCategories'
import './Sidebar.css'

import React from 'react'

function Sidebar({activeCategory, onActiveCategory, }) {
  return (
    
    <aside>
    <h1>Categories</h1>
        <hr/>
     <ul >
     <li
            className={`category-item ${!activeCategory ? "active" : ""}`}
            onClick={() => onActiveCategory("")} >
            All Products {!activeCategory && <span>&gt;</span>}
            
          </li>
      {categories.map((category)=> {
        return(
          <li className={`category-item ${activeCategory===category? 'active': ''}`} 
          onClick={()=> onActiveCategory(category)} key={category}>
            {category} {activeCategory===category && <span>&gt;</span>}
            </li>
        )
      })}
      
     </ul>
    </aside>
    
  )
}

export default Sidebar