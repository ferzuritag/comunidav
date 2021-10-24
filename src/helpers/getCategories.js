export const getCategories = async() => {
    try {
        const url = `http://localhost:8080/master-php/comunidav/api/Categories.php?token=${sessionStorage.getItem("SESSID")}`;
        const resp = await fetch(url);
        const data = await resp.json();
        const array = data.map(({ID,NOMBRE }) => ({
            "id": ID,
            "name": NOMBRE,
        }))
        return array;
    } catch (error) {
        return [];
    }
}
