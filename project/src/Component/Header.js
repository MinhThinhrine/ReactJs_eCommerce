import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <div className="flex inline-block mx-auto max-w-[1380px] my-3">
            <div className="text-5xl w-1/3">My Shop</div>
            <div className="flex justify-between w-full text-xl">
                <div className="flex space-x-5">
                    <button>Home</button>
                    <button>Shop</button>
                    <button>About</button>
                    <button>Contact Us</button>
                </div>
                <div className="flex space-x-3 align-items-center">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    <FontAwesomeIcon icon="fa-solid fa-user"/>
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                </div>
            </div>
        </div>
    );
};

export default Header;