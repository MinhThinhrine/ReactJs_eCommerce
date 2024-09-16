import React, {useEffect, useState} from 'react';
import banner from '../Common/banner.jpg';
import FeatureProduct from "../landing/FeatureProduct";
import {dataItems} from "../products/dataItems";
import Products from "./Products";
import {faClock, faRotateLeft, faTags, faTruckFast} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Body = () => {
    const [products, setProducts] = useState([]);
    const iconMap = {
        faTruckFast: faTruckFast,
        faClock: faClock,
        faRotateLeft: faRotateLeft,
        faTags: faTags
    };
    const data = [
        { key: "Free shipping", value: "Free shipping on all order", font: "faTruckFast" },
        { key: "Support 24/7", value: "Contact us 24 hours a day", font: "faClock" },
        { key: "Money Return", value: "Back guarantee under 7 days", font: "faRotateLeft" },
        { key: "Member Discount", value: "5% on all order", font: "faTags" }
    ]
    useEffect(() => {
        const fetchData = async () => {
            try {
                const allProducts = await dataItems(); // Gọi hàm lấy tất cả sản phẩm
                // const xixaomiProducts = await getXiaomiItems();
                setProducts(allProducts);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <img className="w-[1380px] h-[680px] object-cover " src={banner} alt="banner"/>
            <div className="relative bottom-64 left-1/2 text-5xl bg-white p-2 ">
                "Khám Phá Công Nghệ Mới <br/> Sở Hữu Điện Thoại Đỉnh Cao"
            </div>
            <button
                className="relative bottom-52 left-2/3 text-3xl p-3 rounded-2xl border-2
                border-blue-100 transform transition-transform duration-300 hover:scale-105
                bg-blue-50 hover:text-black active:scale-95 font-serif">SHOP
                NOW
            </button>
            <div className="text-center text-2xl mt-[-150px] font-bold">Discover NEW Products</div>
                <div className="w-2/3 mx-auto my-2">
                    <div className="grid grid-cols-4 grid-rows-3 gap-2">
                        {products.length > 0 ? (
                            products.slice(0, 13).map((item) => (
                                <Products key={item.id} item={item} />
                            ))
                        ) : (
                            <p className="text-center">Loading products...</p>
                        )}
                    </div>
                </div>
                <div className="mx-auto text-center w-full max-w-[1380px]">
                    {data.map((item) => (
                        <div className="inline-block w-1/8 p-2">
                            <FontAwesomeIcon className=" text-5xl" icon={iconMap[item.font]} />
                            <div className="pl-20">
                                <div className="text-left text-2xl font-bold">{item.key}</div>
                                <div className="text-left text-lg">{item.value}</div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default Body;