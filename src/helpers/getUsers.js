import validator from "validator"
import { server } from "../server";
export const getUsers = async ({username = '', country = '',state = '',city = ''}) => {
    if(!validator.isEmpty(username) && validator.isInt(city)){
        try {
            const url = `${server}Users.php?userlike=${username}&city=${city}&token=${sessionStorage.getItem('SESSID')}`;
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
    } else if(!validator.isEmpty(username) && validator.isInt(state)){
        try {
            const url = `${server}Users.php?userlike=${username}&state=${state}&token=${sessionStorage.getItem('SESSID')}`;
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
    } else if(!validator.isEmpty(username) && validator.isInt(country)){
        try {
            const url = `${server}Users.php?userlike=${username}&country=${country}&token=${sessionStorage.getItem('SESSID')}`;
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
    } else if(validator.isInt(city)){
        try {
            const url = `${server}Users.php?city=${city}&token=${sessionStorage.getItem('SESSID')}`;
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
    } else if(validator.isInt(state) ){
        try {
            const url = `${server}Users.php?state=${state}&token=${sessionStorage.getItem('SESSID')}`;
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
    } else if(validator.isInt(country)  ){
        try {
            const url = `${server}Users.php?country=${country}&token=${sessionStorage.getItem('SESSID')}`;
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
                message: `Ocurrio un error en la aplicacion e: ${error}`
            };
        }
    } else if(!validator.isEmpty(username)){
        try {
            const url = `${server}Users.php?userlike=${username}&token=${sessionStorage.getItem('SESSID')}`;
            const resp = await fetch(url,{
                method: "GET",
                headers:{
                    'access-token': sessionStorage.getItem("SESSID")
                }
            });
            const data = await resp.json();
            return data;
        } catch (error) {
            console.log(error)
            return [];
        }
    }else{
        try {
            const url = `${server}Users.php?token=${sessionStorage.getItem('SESSID')}`;
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