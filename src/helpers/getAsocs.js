import validator from "validator"
export const getAsocs = async ({ name = ''}) => {
    if (!validator.isEmpty(name)) {
        try {
            const url = `http://localhost:8080/master-php/comunidav/api/Asocs.php?namelike=${name}&token=${sessionStorage.getItem("SESSID")}`;
            const resp = await fetch(url);
            const data = await resp.json();
            return data;
        } catch (error) {
            return [];
        }
    } else {
        try {
            const url = `http://localhost:8080/master-php/comunidav/api/Asocs.php?token=${sessionStorage.getItem("SESSID")}`;
            const resp = await fetch(url);
            const data = await resp.json();
            return data;
        } catch (error) {
            return [];
        }
    }
}