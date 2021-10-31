import validator from "validator";
import { server } from "../server";
//fix, if not online crashes
export const getStatesByCountry = async (id) => {
  if (validator.isInt(id)) {
    try {
      const url = `${server}States.php?country=${id}`;
      const resp = await fetch(url);
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
    return {
      error: true,
      message: "Ocurrio un error, intente de nuevo",
      data:[]
  };
  }
};
