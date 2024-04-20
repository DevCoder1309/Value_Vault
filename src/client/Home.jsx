import React, { useState } from 'react';
import './App.css';
import ProductCard from './ProductCard';

const Home = () => {
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState('');

  const generateRandomPrice = () => {
    return (Math.random() * 100).toFixed(2);
  };

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${productName}&page_size=30&json=true`);
      const data = await response.json();

      const productResults = data.products.map(product => ({
        productName: product.product_name,
        brand: product.brands,
        imageUrl: product.image_url,
        price: product.price || generateRandomPrice(), 
      }));

      // Apply sorting if sortOption is selected
      if (sortOption === 'price') {
        productResults.sort((a, b) => a.price - b.price);
      }

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
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort by</option>
          <option value="price">Price</option>
        </select>
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
