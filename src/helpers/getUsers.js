import validator from "validator"
export const getUsers = async ({username = '', country = '',state = '',city = ''}) => {
    if(!validator.isEmpty(username) && validator.isInt(city)){
        try {
            const url = `http://localhost:8080/master-php/comunidav/api/Users.php?userlike=${username}&city=${city}&token=${sessionStorage.getItem('SESSID')}`;
            const resp = await fetch(url);
            const data = await resp.json();
            return data;
        } catch (error) {
            return [];
        }
    } else if(!validator.isEmpty(username) && validator.isInt(state)){
        try {
            const url = `http://localhost:8080/master-php/comunidav/api/Users.php?userlike=${username}&state=${state}&token=${sessionStorage.getItem('SESSID')}`;
            const resp = await fetch(url);
            const data = await resp.json();
            return data;
        } catch (error) {
            return [];
        }
    } else if(!validator.isEmpty(username) && validator.isInt(country)){
        try {
            const url = `http://localhost:8080/master-php/comunidav/api/Users.php?userlike=${username}&country=${country}&token=${sessionStorage.getItem('SESSID')}`;
            const resp = await fetch(url);
            const data = await resp.json();
            return data;
        } catch (error) {
            return [];
        }
    } else if(validator.isInt(city)){
        try {
            const url = `http://localhost:8080/master-php/comunidav/api/Users.php?city=${city}&token=${sessionStorage.getItem('SESSID')}`;
            const resp = await fetch(url);
            const data = await resp.json();
            return data;
        } catch (error) {
            return [];
        }
    } else if(validator.isInt(state) ){
        try {
            const url = `http://localhost:8080/master-php/comunidav/api/Users.php?state=${state}&token=${sessionStorage.getItem('SESSID')}`;
            const resp = await fetch(url);
            const data = await resp.json();
            return data;
        } catch (error) {
            return [];
        }
    } else if(validator.isInt(country)  ){
        try {
            const url = `http://localhost:8080/master-php/comunidav/api/Users.php?country=${country}&token=${sessionStorage.getItem('SESSID')}`;
            const resp = await fetch(url);
            const data = await resp.json();
            return data;
        } catch (error) {
            return {
                error: true,
                message: `Ocurrio un error en la aplicacion e: ${error}`
            };
        }
    } else if(!validator.isEmpty(username)){
        try {
            const url = `http://localhost:8080/master-php/comunidav/api/Users.php?userlike=${username}&token=${sessionStorage.getItem('SESSID')}`;
            const resp = await fetch(url);
            const data = await resp.json();
            return data;
        } catch (error) {
            console.log(error)
            return [];
        }
    }else{
        try {
            const url = `http://localhost:8080/master-php/comunidav/api/Users.php?token=${sessionStorage.getItem('SESSID')}`;
            const resp = await fetch(url);
            const data = await resp.json();
            return data;
        } catch (error) {
            return [];
        }
    }
}