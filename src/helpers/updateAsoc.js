import { server } from "../server";

export const updateAsoc = async ({ id, name, description, category }) => {
  const formData = new FormData();
  formData.append("id", id);
  formData.append("name", name);
  formData.append("description", description);
  formData.append("category", category);
  formData.append("token", sessionStorage.getItem("SESSID"));
  try {
    const url = `${server}Asocs.php`;
    const resp = await fetch(url, {
      headers: {
        "access-token": sessionStorage.getItem("SESSID"),
      },
      method: "POST",
      body: formData,
    });
    const { msg } = await resp.json();
    return msg;
  } catch (error) {
    return error;
  }
};
