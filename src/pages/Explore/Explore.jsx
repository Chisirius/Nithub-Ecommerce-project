import React, { useEffect, useState } from 'react'
import './explore.css'
import AllProduct from '../../components/allproduct/AllProduct'
import allData from '../../components/assets/allData'
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

function Explore() {
  const[sortedData, setSortedData] =useState ([...allData]);
  const [sortOrder, setSortOrder] = useState('relevance');
  const [activeCategory, setActiveCategory] = useState('')
  

    const navigate = useNavigate();
  useEffect(
   ()=>{
    let filteredProduct = (activeCategory
      ? allData.filter((data) => data.category === activeCategory)
      : [...allData] ) ;

     if(sortOrder ==='asc'){
      filteredProduct.sort((a,b)=> a.new_price - b.new_price)
    }else if (sortOrder ==='desc'){
      filteredProduct.sort((a,b)=> b.new_price - a.new_price)
    }else{
      [...allData]
    };

setSortedData(filteredProduct)
 }, [sortOrder, activeCategory]);

 const goToProduct = (product) =>{
navigate(`/productDesc/${product.id}`, {state: {product}});
};

  return (
        <div className="page2">
      <div className="main-section">
        
        <Sidebar 
        activeCategory = {activeCategory}
        onActiveCategory ={setActiveCategory}
        />
        
          
          <section className="product-display">
            <div className="product-header">
              <h2 className="section-title">{activeCategory ? activeCategory : 'All Products'}</h2>
              <select className="product-filter" value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                <option value="relevance">Sort by: Relevance</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
           
          <div className="product-grid">
         {sortedData.map((product, i)=> {
          return(
            <AllProduct 
            key ={i}
            p_name ={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
            id={product.id}
            product={product}
            onClick = {()=> goToProduct(product)}
            />
          )
         })}
    
          </div>
      </section>
    </div>
    </div>
  )
}

export default Explore