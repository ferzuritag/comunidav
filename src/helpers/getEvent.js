import { server } from "../server";
export const getEvent = async (id) => {
    const formData = new FormData();
    formData.append("id", id);
      try {
          const url = `${server}Events.php?id=${id}`;
          const resp = await fetch(url, {
            method: "GET",
            headers: {
              "Access-Token": sessionStorage.getItem("SESSID"),
            },
          });
          
          const data = await resp.json();
          return data;
        } catch (error) {
          return {
            error: true,
            message: "Ocurrio un error, intente de nuevo",
            data: [],
          };
        }
  }
  