import React from 'react'
import bestProducts from '../Data/bestSellerproducts.json'
function Products() {
  return (
    <>
        <div className="flex justify-evenly items-center bg-white-50 "> 
            {
               bestProducts.map((items) => (
                  <div>
                    <img src={items.img} alt="" />
                    <span>{items.title}</span>
                  </div>
               ))
            }
        </div>
    </>
  )
}

export default Products