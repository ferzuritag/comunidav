import validator from "validator"
export const getUsers = async ({username = '', country = '',state = '',city = ''}) => {
    if(!validator.isEmpty(username) && validator.isInt(city)){
        try {
            const url = `http://localhost/master-php/comunidav/api/Users.php?userlike=${username}&city=${city}`;
            const resp = await fetch(url);
            const data = await resp.json();
            const array = data.map(({ ID, Usuario,Direccion_Imagen,Nombre }) => ({
                "id": ID,
                "name": Nombre,
                "user": Usuario,
                "path": Direccion_Imagen,
            }));
            console.log(url);
            return array;
        } catch (error) {
            return [];
        }
    } else if(!validator.isEmpty(username) && validator.isInt(state)){
        try {
            const url = `http://localhost/master-php/comunidav/api/Users.php?userlike=${username}&state=${state}`;
            const resp = await fetch(url);
            const data = await resp.json();
            const array = data.map(({ ID, Usuario,Direccion_Imagen,Nombre }) => ({
                "id": ID,
                "name": Nombre,
                "user": Usuario,
                "path": Direccion_Imagen,
            }));
            console.log(url);
            return array;
        } catch (error) {
            return [];
        }
    } else if(!validator.isEmpty(username) && validator.isInt(country)){
        try {
            const url = `http://localhost/master-php/comunidav/api/Users.php?userlike=${username}&country=${country}`;
            const resp = await fetch(url);
            const data = await resp.json();
            const array = data.map(({ ID, Usuario,Direccion_Imagen,Nombre }) => ({
                "id": ID,
                "name": Nombre,
                "user": Usuario,
                "path": Direccion_Imagen,
            }));
            console.log(url);
            return array;
        } catch (error) {
            return [];
        }
    } else if(validator.isInt(city)){
        try {
            const url = `http://localhost/master-php/comunidav/api/Users.php?city=${city}`;
            const resp = await fetch(url);
            const data = await resp.json();
            const array = data.map(({ ID, Usuario,Direccion_Imagen,Nombre }) => ({
                "id": ID,
                "name": Nombre,
                "user": Usuario,
                "path": Direccion_Imagen,
            }));
            console.log(url);
            return array;
        } catch (error) {
            return [];
        }
    } else if(validator.isInt(state) ){
        try {
            const url = `http://localhost/master-php/comunidav/api/Users.php?state=${state}`;
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
    } else if(validator.isInt(country)  ){
        try {
            const url = `http://localhost/master-php/comunidav/api/Users.php?country=${country}`;
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
    } else if(!validator.isEmpty(username)){
        try {
            const url = `http://localhost/master-php/comunidav/api/Users.php?userlike=${username}`;
            const resp = await fetch(url);
            const data = await resp.json();
            const array = data.map(({ ID, Usuario,Direccion_Imagen,Nombre }) => ({
                "id": ID,
                "name": Nombre,
                "user": Usuario,
                "path": Direccion_Imagen,
            }));
            console.log(url);
            return array;
        } catch (error) {
            return [];
        }
    }else{
        try {
            const url = `http://localhost/master-php/comunidav/api/Users.php`;
            const resp = await fetch(url);
            const data = await resp.json();
            const array = data.map(({ ID, Usuario,Direccion_Imagen,Nombre }) => ({
                "id": ID,
                "name": Nombre,
                "user": Usuario,
                "path": Direccion_Imagen,
            }));
            console.log(url);
            return array;
        } catch (error) {
            return [];
        }
    }
}