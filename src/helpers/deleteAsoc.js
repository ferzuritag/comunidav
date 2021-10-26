export const deleteAsoc = async(id) => {
    const formData = new FormData();
    formData.append("delete_asoc", id);
    try {
        const url = `http://localhost:8080/master-php/comunidav/api/Asocs.php`;
        const resp = await fetch(url,{
          method: "POST",
          headers:{
              'access-token': sessionStorage.getItem("SESSID")
          },
          body: formData,
      });
        const {msg} = await resp.json();
        return msg;
      } catch (error) {
        return error;
      }
}
