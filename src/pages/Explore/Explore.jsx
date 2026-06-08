import React, {useContext, useEffect, useState, useMemo } from "react";
import "./explore.css";
import AllProduct from "../../features/products/AllProduct";
import { getAllProducts } from "../../services/productService"
import Sidebar from "../../components/Sidebar/Sidebar";
import { SearchContext } from "../../hooks/search/SearchContext";
import { useLocation, useNavigate } from "react-router-dom";

function Explore() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [sortOrder, setSortOrder] = useState("relevance");

  const [activeCategory, setActiveCategory] =
    useState("all");

  const { searchQuery, setSearchQuery } =
    useContext(SearchContext);

  const navigate = useNavigate();

  const location = useLocation();

  // -------------------------
  // FETCH PRODUCTS (FIXED)
  // -------------------------
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
       

        setProducts(data);
      } catch (error) {
        console.log(error);

        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // -------------------------
  // FILTER + SORT PRODUCTS
  // -------------------------
  const sortedData = useMemo(() => {
    let filteredProduct = products;

    if (activeCategory !== "all") {
      filteredProduct = filteredProduct.filter(
        (product) =>
          product.category.toLowerCase() ===
          activeCategory.toLowerCase()
      );
    }

    if (searchQuery.trim() !== "") {
      filteredProduct = filteredProduct.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      filteredProduct = [...filteredProduct].sort(
        (a, b) => a.price - b.price
      );
    } else if (sortOrder === "desc") {
      filteredProduct = [...filteredProduct].sort(
        (a, b) => b.price - a.price
      );
    }

    return filteredProduct;
  }, [products, activeCategory, searchQuery, sortOrder]);

  // -------------------------
  // NAVIGATION
  // -------------------------
  const goToProduct = (product) => {
    navigate(`/productDesc/${product.id}`, {
      state: { product },
    });
  };

  // -------------------------
  // CLEAR SEARCH ON CATEGORY CHANGE
  // -------------------------
  useEffect(() => {
    setSearchQuery("");
  }, [activeCategory]);

  // -------------------------
  // CLEAR SEARCH ON EXIT
  // -------------------------
  useEffect(() => {
    return () => {
      if (location.pathname === "/explore") {
        setSearchQuery("");
      }
    };
  }, [location.pathname]);

  // -------------------------
  // LOADING UI
  // -------------------------
  if (loading) {
    return <h2>Loading products...</h2>;
  }

  // -------------------------
  // ERROR UI
  // -------------------------
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="page2 explore-page">
      <div className="main-section">
        <Sidebar
          activeCategory={activeCategory}
          onActiveCategory={setActiveCategory}
        />

        <section className="product-display">
          <div className="product-header">
            <h2 className="section-title">
              {activeCategory
                ? activeCategory
                : "All Products"}

              <span className="product-count">
                ({sortedData.length})
              </span>
            </h2>

            <div className="product-header-actions">
              <select
                className="product-filter"
                value={sortOrder}
                onChange={(e) =>
                  setSortOrder(e.target.value)
                }
              >
                <option value="relevance">
                  Sort by: Relevance
                </option>

                <option value="asc">
                  Price: Low to High
                </option>

                <option value="desc">
                  Price: High to Low
                </option>
              </select>
            </div>
          </div>

          <div className="product-grid">
            {sortedData.length === 0 ? (
              <div className="no-results">
                <h3>
                  Product not available at the moment
                </h3>

                <p>
                  Please try a different search or category
                </p>
              </div>
            ) : (
              sortedData.map((product) => (
                <AllProduct
                  key={product.id} 
                  p_name={product.name}
                  image={product.images?.[0]}
                  new_price={product.price}
                  old_price={product.oldPrice}
                  id={product.id}
                  product={product}
                  onClick={() =>
                    goToProduct(product)
                  }
                />
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Explore;