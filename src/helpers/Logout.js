import { server } from "../server";

export const Logout = async(token) => {
    const formData = new FormData();
    formData.append("token", token);
    try {
        const url = `${server}Login.php`;
        const resp = await fetch(url, {
            method: 'POST',
            body: formData,
        });
        const { error } = await resp.json();
        return error;
    } catch (error) {
        return {
            error: true,
            message: "Ocurrio un error, intente de nuevo",
            data:[]
        };
    }
}
