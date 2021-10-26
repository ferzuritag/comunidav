
export const Logout = async(token) => {
    const formData = new FormData();
    formData.append("token", token);
    try {
        const url = `http://localhost:8080/master-php/comunidav/api/Login.php`;
        const resp = await fetch(url, {
            method: 'POST',
            body: formData,
        });
        const { error } = await resp.json();
        return error;
    } catch (error) {
        return false;
    }
}
