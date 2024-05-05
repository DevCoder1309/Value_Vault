import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Home = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [searched, setSearched] = useState(false);

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
        setSearched(true);

        localStorage.setItem('searchQuery', query);
        localStorage.setItem('searchResults', JSON.stringify(filteredProducts));
      })
      .catch(error => console.error('Error searching products:', error));
  };

  return (
    <div className='py-20'>
      <div className="flex flex-col justify-center items-center gap-20">
        <h1 className='text-3xl uppercase font-prim font-bold'>Grocery Product Search</h1>
        <div className="flex justify-center items-center gap-20">
          <input
            type="text"
            placeholder="Enter product name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='w-96 p-3 rounded-lg text-indigo-800'
          />
          <button onClick={handleSearch} className='p-3 w-24 rounded-lg bg-indigo-300 hover:bg-indigo-900 hover:text-indigo-100' >Search</button>
        </div>
      </div>
      {searched && products.length === 0 && (
        <p className="text-3xl uppercase font-prim font-bold" style={{marginLeft: '32.5rem', marginTop: '5rem'}}>No match found</p>
      )}
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
