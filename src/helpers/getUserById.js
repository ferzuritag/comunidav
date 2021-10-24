
export const getUserById = async(id) =>{
    try {
        const url = `http://localhost:8080/master-php/comunidav/api/Users.php?id=${id}&token=${sessionStorage.getItem("SESSID")}`;
        const resp = await fetch(url);
        const data = await resp.json();
        const array = data.map(({id,name,lastName1,lastName2,email,phone,country,state,city,path,user}) => ({
            "id": id,
            "name": name,
            "lastName1": lastName1,
            "lastName2": lastName1,
            "user": user,
            "email": email,
            "phone": phone,
            "country": country,
            "state": state,
            "city": city,
            "path": path,

        }))
        return array[0];
    } catch (error) {
        return [];
    }

}