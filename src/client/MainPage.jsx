  import React, { useState, useEffect } from 'react';
  import { ReactTyped } from 'react-typed';
  import axios from 'axios';
  import Home from './Home';
  import Navbar from './Navbar';


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
      <div className='min-h-screen'>
        <Navbar />
      <div className="bg-cover" style={{ backgroundImage: 'url(grocery-store.jpg)', backgroundSize: 'contain'}}>

        <div className="flex flex-col justify-center items-center gap-7 min-h-screen">
          <h1 className="font-extrabold">
            <ReactTyped
              strings={['Value Vault']}
              typeSpeed={50}
              showCursor={false}
              className='text-7xl uppercase font-extrabold hoverAll'
            />
          </h1>
          <p className="text-3xl font-prim uppercase font-extrabold hoverAll">For Savings</p>
        </div>

        <div className="mt-24 bg-indigo-500">
          <Home />
        </div>
      </div>
      </div>
    );
  };

  export default MainPage;
