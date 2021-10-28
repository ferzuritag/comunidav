import validator from "validator"
export const getAsocs = async ({ name = ''}) => {
    if (!validator.isEmpty(name)) {
        try {
            const url = `http://localhost:8080/master-php/comunidav/api/Asocs.php?namelike=${name}`;
            const resp = await fetch(url,{
                method: "GET",
                headers:{
                    'access-token': sessionStorage.getItem("SESSID")
                }
            });
            const data = await resp.json();
            console.log(name,data)
            return data;
        } catch (error) {
            return [];
        }
    } else {
        try {
            const url = `http://localhost:8080/master-php/comunidav/api/Asocs.php?}`;
            const resp = await fetch(url,{
                method: "GET",
                headers:{
                    'access-token': sessionStorage.getItem("SESSID")
                }
            });
            const data = await resp.json();
            return data;
        } catch (error) {
            return [];
        }
    }
}