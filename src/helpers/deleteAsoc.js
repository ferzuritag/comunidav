import { server } from "../server";

export const deleteAsoc = async(id) => {
    const formData = new FormData();
    formData.append("delete_asoc", id);
    try {
        const url = `${server}Asocs.php`;
        const resp = await fetch(url,{
          method: "POST",
          headers:{
              'Access-Token': sessionStorage.getItem("SESSID")
          },
          body: formData,
      });
        const data = await resp.json();
        return data;
      } catch (error) {
        return {
          error: true,
          message: "Ocurrio un error, intente de nuevo",
          data:[]
      };
      }
}
