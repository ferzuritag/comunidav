import validator from "validator";

export const getCitysByState = async (id) => {
    if (validator.isInt(id)) {
        try {
            const url = `http://localhost:8080/master-php/comunidav/api/Citys.php?state=${id}&token=${sessionStorage.getItem("SESSID")}`;
            const resp = await fetch(url);
            const {data} = await resp.json();
            return data;
        } catch (error) {
            return [];
        }    
    }  else {
        return [];
    }
}
