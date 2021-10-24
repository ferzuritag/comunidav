var md5 = require("md5"); 
export const Login = async({user, password}) => {
    const formData = new FormData();
    formData.append("user", md5(user));
    formData.append("password", md5(password));
    try {
        const url = `http://localhost:8080/master-php/comunidav/api/Login.php`;
        const data = await fetch(url, {
            method: 'POST',
            body: formData,
        });
        const resp = await data.json() ;
        console.log(resp)
        return resp;
    } catch (error) {
        return error;
    }
}
