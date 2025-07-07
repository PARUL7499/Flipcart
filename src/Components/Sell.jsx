import React from 'react';
import SellData from '../Data/Sell.json';

function Sell() {
    return (
        <div className="h-[45vh] overflow-x-auto overflow-y-hidden p-10 font-size-30 ">
                <h2 className="text-lg font-bold font-size-30 mb-4">Beauty , Food ,Toys & More </h2>
            <div className="flex flex-nowrap items-center justify-evenly gap-4 px-4 py-2 h-full">
                {SellData.map((item, index) => (
                    <div
                        key={index}
                        className="w-[100px]  flex-shrink justify-evenly text-center"
                    >
                        <img 
                            src={item.img} 
                            alt={item.title}
                            className=""
                        />
                        <span className="block mt-1 text-sm">{item.title}</span>
                         <span className="block mt-1 text-sm font-bold">{item.discount}</span>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sell


















