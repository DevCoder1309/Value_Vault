import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import axios from 'axios';
import ProductCard from './ProductCard';
import Home from './Home';
import Navbar from './Navbar';
//import './MainPage.css'; 

const MainPage = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        setRandomProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching random products:', error);
      });
  }, []);

  return (
    <div className="main-page">
      <div className="welcome-message">
        <h1 className="main-title">
          <ReactTyped
            strings={['Welcome to Value Vault']}
            typeSpeed={50}
            showCursor={false}
          />
        </h1>
        <p className="main-description">In Value Vault, you will find the best price deals nearest to your location. We strive to provide you with the very best from our end.</p>
      </div>
      <div className="random-products">
        <h2 className="featured-title" style={{textDecoration: "underline"}}>Today's Best Deals</h2>
        <div className="product-cards">
          {randomProducts.map(product => (
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
        <Navbar />
      </div>
      <div className="home-section" style={{marginTop: '25rem'}}>
        <Home />
      </div>
    </div>
  );
};

export default MainPage;
