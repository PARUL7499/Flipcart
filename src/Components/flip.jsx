import React from 'react';
import flip from '../Data/flip.json'; // ✅ Rename imported JSON to avoid conflict

function Flip() { 


    return (

      
      

        <div className="h-[45vh] overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 p-10"> <br />
             <h2 className="text-lg font-bold font-size-30 mb-4">Sports, Healthcare & More </h2>
            <div className="flex flex-nowrap items-center justify-evenly gap-4 px-4 py-2 h-full">
                 
                {flip.map((item, index) => (
                    <div
                        key={index}
                        className="w-[100px] flex-shrink-0 text-center"
                    >
                        <img 
                            src={item.img} 
                            alt={item.title}
                            className="w-full h-auto"
                        />
                        <span className="block mt-1 text-sm">{item.title}</span>
                        <span className="block mt-1 text-sm font-bold">{item.discount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Flip;
