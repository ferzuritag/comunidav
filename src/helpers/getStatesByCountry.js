import validator from "validator";
import { server } from "../server";
//fix, if not online crashes
export const getStatesByCountry = async (id) => {
  if (validator.isInt(id)) {
    try {
      const url = `${server}country=${id}&token=${sessionStorage.getItem(
        "SESSID"
      )}`;
      const resp = await fetch(url);
      const { data } = await resp.json();
      const array = data.map(({ name, id }) => ({
        id: id,
        name: name,
      }));
      return array;
    } catch (error) {
      return [];
    }
  } else {
    return [];
  }
};
