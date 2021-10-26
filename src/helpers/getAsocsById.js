export const getAsocsById = async (id) => {
    try {
        const url = `http://localhost:8080/master-php/comunidav/api/Asocs.php?id=${id}}`;
        const resp = await fetch(url,{
            method: "GET",
            headers:{
                'access-token': sessionStorage.getItem("SESSID")
            }
        });
        const {data} = await resp.json();
        return data;
    } catch (error) {
        return [];
    }
}