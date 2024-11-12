import React from 'react'
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
    <div className="col">
      <div className="row">
        <img
          src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <button>
          <Link className="link" to="/products/1">
            Sale
          </Link>
        </button>
      </div>
      <div className="row">
        <img
          src="https://images.pexels.com/photos/7466264/pexels-photo-7466264.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <button>
          <Link to="/products/1" className="link">
            Women
          </Link>
        </button>
      </div>
    </div>
    <div className="col">
      <div className="row">
        {" "}
        <img
          src="https://images.pexels.com/photos/12563616/pexels-photo-12563616.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <button>
          <Link to="/products/1" className="link">
            New Season
          </Link>
        </button>
      </div>
    </div>
    <div className="col col-l">
      <div className="row">
        <div className="col">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/5868721/pexels-photo-5868721.jpeg?auto=compress&cs=tinysrgb&w=1600"
            //   "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link to="/products/1" className="link">
                Men
              </Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            {" "}
            <img
            src = "https://images.pexels.com/photos/28169367/pexels-photo-28169367/free-photo-of-black-model-in-yellow-drapes.jpeg?auto=compress&cs=tinysrgb&w=1600"
            //   "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"

            //   src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link to="/products/1" className="link">
                Accessories
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <img
          src="https://images.pexels.com/photos/13580587/pexels-photo-13580587.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <button>
          <Link to="/products/1" className="link">
            Shoes
          </Link>
        </button>
      </div>
    </div>
  </div>
  );
};

export default Categories