import React, { useState, useEffect } from 'react';
import './App.css';
import ProductCard from './ProductCard';

const Home = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
      setQuery(savedQuery);
    }
    
    const savedResults = JSON.parse(localStorage.getItem('searchResults'));
    if (savedResults) {
      setProducts(savedResults);
    }
  }, []);

  const handleSearch = () => {
    const searchQuery = query.toLowerCase();
    fetch(`http://localhost:3000/products`)
      .then(response => response.json())
      .then(data => {
        const filteredProducts = data.filter(product =>
          new RegExp(searchQuery.split('').join('.*'), 'i').test(product.name.toLowerCase())
        );
        setProducts(filteredProducts);

        localStorage.setItem('searchQuery', query);
        localStorage.setItem('searchResults', JSON.stringify(filteredProducts));
      })
      .catch(error => console.error('Error searching products:', error));
  };

  return (
    <div className="home-container">
      <h1>Grocery Product Search</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter product name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="product-cards">
        {products.map(product => (
          <ProductCard
            key={product._id}
            productName={product.name}
            brand={product.description}
            imageUrl={product.image}
            priceAmazon={product.price_amazon}
            priceFlipkart={product.price_flipkart}
            priceBigbasket={product.price_bigbasket}
            website_a={product.product_url_a}
            website_f={product.product_url_f}
            website_b={product.product_url_b}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
