import { server } from "../server";

//
export const getSupportInboxFrom = async(id) => {
    try {
        const url = `${server}Inbox.php?token=${sessionStorage.getItem("SESSID")}&id=${id}`;
        const resp = await fetch(url,{
            method: "GET",
            headers:{
                'access-token': sessionStorage.getItem("SESSID")
            }
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        return [];
    }
}
