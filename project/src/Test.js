import React, { useEffect, useState } from 'react';
import {detailData} from "./products/detail/detailData";
import {dataItems} from "./products/dataItems";
import DetailItem from "./products/detail/DetailItem";
const ProductList = () => {
    const type=["Apple","Xiaomi","Samsung"]
    const [products, setProducts] = useState([]);
    const [details, setDetails] = useState(null);
    const [typeProduct, setTypeProduct] = useState("Xiaomi");
    const productId = 1;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const allProducts = await dataItems(); // Gọi hàm lấy tất cả sản phẩm
                const productDetails = await detailData(productId); // Gọi hàm lấy chi tiết sản phẩm
                // const xixaomiProducts = await getXiaomiItems();
                setProducts(allProducts);
                setDetails(productDetails);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);

    const changeType = (type) => () => {
        setTypeProduct(type); // Set the selected type
    };

    // Filter products based on the selected type
    const filteredProducts = products.filter(product =>
        product.name && product.name.toLowerCase().startsWith(typeProduct.toLowerCase())
    );

    return (
        <div>
            <h1>Product List</h1>
            <p>{typeProduct}</p>
            {type.map((item) => (
                <button
                    className="bg-blue-500 ml-1 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                    onClick={changeType(item)} >
                    {item}
                </button>
            ))}
            {filteredProducts.slice(0, 10).map((product) => {
                return (
                    <div key={product.id} id={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <img src={product.img_url} alt={product.name}></img>
                    </div>
                );
            })}
            {details && (
                <div>
                    <h1>Product Details</h1>
                    {Object.entries(details).map(([label, value]) => (
                        <DetailItem key={label} label={label} value={value}/>
                    ))}
                </div>
            )}        </div>
    );
};

export default ProductList;