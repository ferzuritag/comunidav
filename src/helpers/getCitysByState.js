import validator from "validator";

export const getCitysByState = async (id) => {
    if (validator.isInt(id)) {
        try {
            const url = `http://localhost:8080/master-php/comunidav/api/Citys.php?id_state=${id}&token=${sessionStorage.getItem("SESSID")}`;
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
    }  else {
        return [];
    }
}
