import { server } from "../server";

export const getCategories = async() => {
    try {
        const url = `${server}Categories.php?token=${sessionStorage.getItem("SESSID")}`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        return data;
    } catch (error) {
        return [];
    }
}
