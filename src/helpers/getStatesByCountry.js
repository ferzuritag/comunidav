import validator from "validator";
export const getStatesByCountry = async(id) => {
    if(validator.isInt(id)){
        try {
            const url = `http://localhost/master-php/comunidav/api/States.php?id_country=${id}`;
            const resp = await fetch(url);
            const data = await resp.json();
            const array = data.map(({ nombre, id }) => ({
                "id": id,
                "name": nombre,
            }));
            return array;
        } catch (error) {
            return [];
        }
    } else {
        return [];
    }
}