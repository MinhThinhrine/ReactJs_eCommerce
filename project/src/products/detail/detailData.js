import { getDatabase, ref, child, get } from "firebase/database";
import {database} from "../../firebase";


export const detailData = async (productId) => {
    const dbRef = ref(database);
    try {
        const productSnapshot = await get(child(dbRef, `items/${productId}`));
        if (productSnapshot.exists()) {
            return productSnapshot.val().specs; // Hoặc có thể trả về toàn bộ sản phẩm nếu cần
        } else {
            console.log("No items available");
            return null;
        }
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
};