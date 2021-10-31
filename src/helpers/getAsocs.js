import validator from "validator";
import { server } from "../server";
export const getAsocs = async ({ name = "" }) => {
  if (!validator.isEmpty(name)) {
    try {
      const url = `${server}Asocs.php?namelike=${name}`;
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("SESSID"),
        },
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
  } else {
    try {
      const url = `${server}Asocs.php`;
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("SESSID"),
        },
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
};
