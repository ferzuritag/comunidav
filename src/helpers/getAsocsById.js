import { server } from "../server";

export const getAsocsById = async (id) => {
  try {
    const url = `${server}Asocs.php?id=${id}}`;
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        "access-token": sessionStorage.getItem("SESSID"),
      },
    });
    const { data } = await resp.json();
    if (data) {
      return data;
    } else {
      return {
        id: "",
        name: "",
        description: "",
        category: "",
      };
    }
  } catch (error) {
    return {
      id: "",
      name: "",
      description: "",
      category: "",
    };
  }
};
