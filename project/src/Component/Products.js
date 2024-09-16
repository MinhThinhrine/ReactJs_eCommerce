import React from 'react';

const Products = (props) => {
    return (
        <div>
            <div>
                <img className="w-full"
                     src={props.item.img_url}
                     alt={props.item.name}/>
                <div className="text-center font-bold">{props.item.name}</div>
                <div className="text-center text-main">{props.item.price}</div>
            </div>
        </div>
    );
};

export default Products;