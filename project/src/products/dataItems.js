import { getDatabase, ref, get } from "firebase/database";
import {database} from "../firebase";

export const dataItems = async () => {
    const dbRef = ref(database, 'items');
    try {
        const itemsSnapshot = await get(dbRef);
        if (itemsSnapshot.exists()) {
            return itemsSnapshot.val(); // Trả về toàn bộ dữ liệu của các sản phẩm
        } else {
            console.log("No items available");
            return null;
        }
    } catch (error) {
        console.error("Error fetching items data: ", error);
        return null;
    }
};