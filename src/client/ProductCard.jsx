import React from 'react';
import './ProductCard.css';

const ProductCard = ({ website, productName, brand, imageUrl, priceAmazon, priceFlipkart, priceBigbasket , website_a, website_f, website_b}) => {



  const flipkartProduct = (
 
    <div className="product-card" style={{marginTop: "8rem"}}>
      {/* <h3>From Flipkart</h3> */}
      <img src={imageUrl} alt={productName} width={150} height={150}/>
      <p style={{fontWeight: 'bold'}}>{productName}</p>
      <p style={{fontWeight: '500'}}>{brand}</p>
       <a href={website_a}><p style={{fontWeight: 'bold'}}>Amazon : ₹{priceAmazon}</p></a>
      <a href={website_f}><p style={{fontWeight: 'bold'}}>Flipkart : ₹{priceFlipkart}</p></a>
      <a href={website_b}><p style={{fontWeight: 'bold'}}>Big Basket : ₹{priceBigbasket}</p></a>
    </div>
  );

  return (
    <>
      {flipkartProduct}
    </>
  );
};

export default ProductCard;
