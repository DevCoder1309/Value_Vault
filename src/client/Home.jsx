import React, { useState } from 'react';
import './App.css';
import ProductCard from './ProductCard';

const Home = () => {
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateRandomPrice = () => {
    return (Math.random() * 100).toFixed(2);
  };

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${productName}&page_size=10&json=true`);
      const data = await response.json();

      const productResults = data.products.map(product => ({
        productName: product.product_name,
        brand: product.brands,
        imageUrl: product.image_url,
        price: product.price || generateRandomPrice(), 
      }));

      setProducts(productResults);
    } catch (error) {
      console.error('Error:', error);
    }

    setLoading(false);
  };

  return (
    <div className="home-container">
      <h1>Grocery Product Search</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      <div className="product-cards">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            productName={product.productName}
            brand={product.brand}
            imageUrl={product.imageUrl}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
