export const getCountries = async () => {
    try {
        const url = `http://localhost/master-php/comunidav/api/Countries.php`;
        const resp = await fetch(url);
        const data = await resp.json();
        const array = data.map(({ nombre, id }) => ({
            "id": id,
            "name": nombre,

        }))
        return array;
    } catch (error) {
        return [];
    }
}