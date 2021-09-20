
export const getUserById = async(id) =>{
    try {
        const url = `http://localhost/master-php/comunidav/api/Users.php?id=${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        const array = data.map(({ID,Nombre,ApellidoP,ApellidoM,Usuario,Correo,Telefono,ID_Municipio,Direccion_Imagen,Pais,Estado }) => ({
            "id": ID,
            "name": Nombre,
            "lastName1": ApellidoP,
            "lastName2": ApellidoM,
            "user": Usuario,
            "email": Correo,
            "phone": Telefono,
            "country": Pais,
            "state": Estado,
            "city": ID_Municipio,
            "path": Direccion_Imagen,

        }))
        return array[0];
    } catch (error) {
        return [];
    }

}