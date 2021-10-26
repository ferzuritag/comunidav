
export const getSupportInbox = async() => {
    try {
        const url = `http://localhost:8080/master-php/comunidav/api/Inbox.php?token=${sessionStorage.getItem("SESSID")}`;
        const resp = await fetch(url);
        const data = await resp.json();
        const array = data.map(({ ID, Usuario,Direccion_Imagen,Nombre }) => ({
            "id": ID,
            "name": Nombre,
            "user": Usuario,
            "path": Direccion_Imagen,
        }));
        return array;
    } catch (error) {
        return [];
    }
}
