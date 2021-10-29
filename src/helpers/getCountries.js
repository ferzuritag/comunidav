import { server } from "../server";

export const getCountries = async () => {
    try {
        const url = `${server}Countries.php?`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        const array = data.map(({ name, id }) => ({
            "id": id,
            "name": name,

        }))
        return array;
    } catch (error) {
        return [];
    }
}