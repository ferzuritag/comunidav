import { server } from "../server";

export const deleteUser = async (id) => {
  const formData = new FormData();
  formData.append("delete_user", id);
  try {
    const url = `${server}Users.php`;
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "access-token": sessionStorage.getItem("SESSID"),
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
};
