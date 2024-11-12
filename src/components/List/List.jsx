import React from 'react'
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
    const data = [
        {
            id: 1,
            img: "https://d1xbedroeo1z0l.cloudfront.net/fit-in/1100x1100/Flipkart.com/fkitm366b6041a285f_1100x1100.jpeg",
            img2: "https://m.media-amazon.com/images/I/71MMX+wLaVL._SY879_.jpg",
            title: "Geometric print pure cotton kurta",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://d1xbedroeo1z0l.cloudfront.net/fit-in/1100x1100/Flipkart.com/fkitme794d4f4ca9dd_1100x1100.jpeg",
            img2: "https://m.media-amazon.com/images/I/61Bj+SsC32L._SX679_.jpg",
            title: "Long sleeve-Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
            amazonLink: "https://www.amazon.in/Woman-Womens-Cotton-Regular-23FEW18711-120115_Ecru/dp/B0BTLVBD3R/?creative=165953&creativeASIN=B0BTLVBD3R&tag=cuelinkss23220-21&ascsubtag=20241112clhmyfqnl8be", // Add the correct product link for Amazon
            flipkartLink: "https://www.flipkart.com/w-women-geometric-print-a-line-kurta/p/itm366b6041a285f?pid=KTAGMESMYSZFKSYU&lid=LSTKTAGMESMYSZFKSYUS7GZPY&affid=salescueli&affExtParam1=20241112cl4bxwlka7a5&affExtParam2=21928",
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&w=1600",
            // img2: "https://images.pexels.com/photos/12820465/pexels-photo-12820465.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long sleeve-Graphic T-shirt",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&w=1600",
            // img2: "https://images.pexels.com/photos/12820465/pexels-photo-12820465.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long sleeve-Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ];
  return (
    <div className='list'>{data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}
        </div>
      
    
  )
}
   


export default List