export const getCountries = async () => {
    try {
        const url = `http://localhost:8080/master-php/comunidav/api/Countries.php?token=${sessionStorage.getItem("SESSID")}`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        const array = data.map(({ name, id }) => ({
            "id": id,
            "name": name,

        }))
        return array;
    } catch (error) {
        return [];
    }
}