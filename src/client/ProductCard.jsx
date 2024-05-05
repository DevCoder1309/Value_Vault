import React from 'react';
import './ProductCard.css';

const ProductCard = ({ website, productName, brand, imageUrl, priceAmazon, priceFlipkart, priceBigbasket , website_a, website_f, website_b}) => {



  const flipkartProduct = (
 
    <div className="product-card font-prim" style={{marginTop: "8rem"}}>
      <img src={imageUrl} alt={productName} width={150} height={150}/>
      <p style={{fontWeight: 'bold'}}>{productName}</p>
      <p style={{fontWeight: '500'}}>{brand}</p>
      <a href={website_a} style={{fontWeight: '800'}}> <img src="a.png" alt="" style={{ width: '30px', height: 'auto', borderWidth: 0 }} />Amazon : ₹{priceAmazon}</a><br />
      <a href={website_f} style={{fontWeight: '800'}}><img src="f.png" alt="" style={{ width: '30px', height: 'auto', borderWidth: 0}} />Flipkart : ₹{priceFlipkart}</a><br />
      <a href={website_b} style={{fontWeight: '800'}}><img src="b.png" alt="" style={{ width: '30px', height: 'auto', borderWidth: 0 }} />Big Basket : ₹{priceBigbasket}</a>
    </div>
  );

  return (
    <>
      {flipkartProduct}
    </>
  );
};

export default ProductCard;
