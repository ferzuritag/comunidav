import validator from "validator";
import { server } from "../server";

export const getCitysByState = async (id) => {
  if (validator.isInt(id)) {
    try {
      const url = `${server}Citys.php?state=${id}}`;
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
      error: false,
      message: "Ocurrio un error, intente de nuevo",
      data:[]
  };
  }
};
