import { server } from "../server";

export const getCountries = async () => {
    try {
        const url = `${server}Countries.php?`;
        const resp = await fetch(url);
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