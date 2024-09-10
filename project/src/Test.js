import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getDatabase, ref, child, get } from "firebase/database";
import {database} from "./firebase";
const dbRef = ref(database);

get(child(dbRef, `items`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});

const ProductList = () => {

    return (
        <div>
            <h1>Product List</h1>

        </div>
    );
};

export default ProductList;