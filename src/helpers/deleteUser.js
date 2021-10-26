export const deleteUser = async(id) => {
    const formData = new FormData();
    formData.append("delete_user", id);
    try {
        const url = `http://localhost:8080/master-php/comunidav/api/Users.php`;
        const resp = await fetch(url,{
          method: "POST",
          headers:{
              'access-token': sessionStorage.getItem("SESSID")
          },
          body: formData,
      });
        const data = await resp.json();
        return data;
      } catch (error) {
        return error;
      }
}
