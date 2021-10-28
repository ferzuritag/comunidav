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
        const {data} = await resp.json();
        if(data){
            
        return data;
        }else{
            return {
                id: '',
                name : '',
                lastName : '',
                lastName2: '',
                username: '',
                email: '',
                phone: '',
                city: '',
                state: '',
                country: '',
                path: '',
            };
        }
    } catch (error) {
        return {
            id: '',
            name : '',
            lastName : '',
            lastName2: '',
            username: '',
            email: '',
            phone: '',
            city: '',
            state: '',
            country: '',
            path: '',
        };
    }

}