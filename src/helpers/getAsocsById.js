export const getAsocsById = async (id) => {
    try {
        const url = `http://localhost:8080/master-php/comunidav/api/Asocs.php?id=${id}&token=${sessionStorage.getItem("SESSID")}`;
        const resp = await fetch(url);
        const data = await resp.json();
        const array = data.map(({ID,Razon_Social,Descripcion,ID_Categoria }) => ({
            "id": ID,
            "name": Razon_Social,
            "description": Descripcion,
            "category": ID_Categoria,
        }))
        return array[0];
    } catch (error) {
        return [];
    }
}