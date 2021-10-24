export const updateAsoc = async ({id,name,description,category}) => {
    const formData = new FormData();
    formData.append("id",id);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("token", sessionStorage.getItem("SESSID"))
    try {
      const url = `http://localhost:8080/master-php/comunidav/api/Asocs.php`;
      const resp = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      const {msg} = await resp.json();
      return msg;
    } catch (error) {
      return error;
    }
  }
  