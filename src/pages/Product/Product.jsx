import React from 'react'
import "./Product.scss";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://d1xbedroeo1z0l.cloudfront.net/fit-in/1100x1100/Flipkart.com/fkitm366b6041a285f_1100x1100.jpeg",
     "https://m.media-amazon.com/images/I/71MMX+wLaVL._SY879_.jpg",
  ];
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
        <img src={images[0]} alt ="" onClick={e=>setSelectedImg(0)}/>
        <img src={images[1]} alt ="" onClick={e=>setSelectedImg(1)}/>         
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt=""/>

        </div>

      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$1900</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium totam ad minima. Rem, in cupiditate alias necessitatibus reprehenderit minima ut atque earum veritatis! Natus officia quo qui et ratione dolore?
        </p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className="add"></button>
      </div>
    </div>
  )
}

export default Product
