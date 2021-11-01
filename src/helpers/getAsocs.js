import validator from "validator";
import { server } from "../server";
export const getAsocs = async ({ search:name = "", category = "" }) => {
  if (!validator.isEmpty(name) && validator.isInt(category)) {
    try {
      const url = `${server}Asocs.php?namelike=${name}&category=${category}`;
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
  } else if (validator.isInt(category)) {
    try {
      const url = `${server}Asocs.php?category=${category}`;
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
  } else if (!validator.isEmpty(name)) {
    try {
      const url = `${server}Asocs.php?namelike=${name}`;
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
      const url = `${server}Asocs.php`;
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
};
