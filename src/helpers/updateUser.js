export const updateUser = async ({id,name,lastName1,lastName2,email,phone,city,user}) => {
  const formData = new FormData();
  formData.append("id",id);
  formData.append("name", name);
  formData.append("lastName1",lastName1);
  formData.append("lastName2", lastName2);
  formData.append("email",email);
  formData.append("phone",phone);
  formData.append("city",city);
  formData.append("user",user);
  formData.append("token", sessionStorage.getItem("SESSID"))
  try {
    const url = `http://localhost:8080/master-php/comunidav/api/Users.php`;
    const resp = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    const {msg} = await resp.json();
    return msg;
  } catch (error) {
    return "errorjs";
  }
}
