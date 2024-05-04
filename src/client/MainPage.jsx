  import React, { useState, useEffect } from 'react';
  import { ReactTyped } from 'react-typed';
  import axios from 'axios';
  import ProductCard from './ProductCard';
  import Home from './Home';
  import Navbar from './Navbar';


  const MainPage = () => {
    const [randomProducts, setRandomProducts] = useState([]);

  //  useEffect(() => {
  //    axios.get('http://localhost:3000/products')
  //      .then(response => {
  //        setRandomProducts(response.data);
  //      })
  //      .catch(error => {
  //        console.error('Error fetching random products:', error);
  //      });
  //  }, []);

    return (
      <div className=" bg-indigo-600 min-h-screen">
        <Navbar />
        <div className="flex flex-col justify-center items-center gap-7 min-h-screen">
          <h1 className="font-extrabold">
            <ReactTyped
              strings={['Value Vault']}
              typeSpeed={50}
              showCursor={false}
              className='text-7xl'
            />
          </h1>
          <p className="text-xl mt-8">Savings Only</p>
        </div>

        <div className="mt-24">
          <Home />
        </div>
      </div>
    );
  };

  export default MainPage;
