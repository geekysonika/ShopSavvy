import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className='link'  to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className='link'  to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className='link'  to="/products/3">Accessories</Link>
          </div>
          <div className="item">
            <Link className='link'  to="/products/4">Shoes</Link>
          </div>
          <div className="item">
            <Link className='link'  to="/products/5">Beauty</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link'  to="/">ShopSavvy</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link'  to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className='link'  to="/">About</Link>
          </div>
          <div className="item">
            <Link className='link'  to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className='link'  to="/">Sonika</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
  

export default Navbar