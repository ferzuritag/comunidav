import { server } from "../server";
var md5 = require("md5"); 

export const Login = async({user, password}) => {
    const formData = new FormData();
    formData.append("user", md5(user));
    formData.append("password", md5(password));
    try {
        const url = `${server}Login.php`;
        const resp = await fetch(url, {
            method: 'POST',
            body: formData,
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        return {
            error: true,
            message: "Ocurrio un error, intente de nuevo",
            data:[]
        };
    }
}
