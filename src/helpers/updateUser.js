import { server } from "../server";

export const updateUser = async ({id,name,lastName1,lastName2,email,phone,city,username}) => {
  const formData = new FormData();
  formData.append("id",id);
  formData.append("name", name);
  formData.append("username", username);
  formData.append("lastName1",lastName1);
  formData.append("lastName2", lastName2);
  formData.append("email",email);
  formData.append("phone",phone);
  formData.append("city",city);
  formData.append("username",username);
  try {
    const url = `${server}Users.php`;
    const resp = await fetch(url, {
      headers:{
        'access-token': sessionStorage.getItem("SESSID")
    },
      method: 'POST',
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
