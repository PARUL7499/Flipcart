import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsShopWindow } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

function Navbar() {
    return (
        <>
            <div className="flex h-20 justify-evenly  items-center bg-white">

                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />

                <input type="text" className='bg-blue-50 w-1/3 px-10 py-2 ouline-none border-none rounded-md' placeholder=  ' Search for Products, Brands and More ' />

                <span className="btn hover:bg-blue-500 hover:px-5 hover:py-3 hover:rounded-lg hover:text-white hover:font-semibold flex justify-evenly gap-2 "> <FaRegCircleUser /> Login </span>
                <select name="" id=""> Login </select>
                 


                <span className="btn flex gap-3"> <BsCart3 />Cart </span>
                <span className="btn flex gap-3"> <BsShopWindow /> Become a Seller</span>

            </div>
        </>
    )
}

export default Navbar