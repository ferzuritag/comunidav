export const updateUser = async ({id,name,lastName,lastName2,email,phone,city,username}) => {
  const formData = new FormData();
  formData.append("id",id);
  formData.append("name", name);
  formData.append("lastName",lastName);
  formData.append("lastName2", lastName2);
  formData.append("email",email);
  formData.append("phone",phone);
  formData.append("city",city);
  formData.append("username",username);
  formData.append("token", sessionStorage.getItem("SESSID"))
  try {
    const url = `http://localhost:8080/master-php/comunidav/api/Users.php`;
    const resp = await fetch(url, {
      headers:{
        'access-token': sessionStorage.getItem("SESSID")
    },
      method: 'POST',
      body: formData,
    });
    const {msg} = await resp.json();
    return msg;
  } catch (error) {
    return "errorjs";
  }
}
