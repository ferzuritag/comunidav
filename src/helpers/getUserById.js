import { server } from "../server";

export const getUserById = async(id) =>{
    try {
        const url = `${server}Users.php?id=${id}}`;
        const resp = await fetch(url,{
            method: "GET",
            headers:{
                'access-token': sessionStorage.getItem("SESSID")
            }
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