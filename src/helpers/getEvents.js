import { server } from "../server";
import validator from "validator";
export const getEvents = async ({ search=""}) => {
  const formData = new FormData();
  formData.append("search", search);
  if (!validator.isEmpty(search)) {
    try {
        const url = `${server}Events.php?search=${search}`;
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
  } else {
    try {
        const url = `${server}Events.php?`;
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
}
