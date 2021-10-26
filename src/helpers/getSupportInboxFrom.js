//
export const getSupportInboxFrom = async(id) => {
    try {
        const url = `http://localhost:8080/master-php/comunidav/api/Inbox.php?token=${sessionStorage.getItem("SESSID")}&id=${id}`;
        const resp = await fetch(url,{
            method: "GET",
            headers:{
                'access-token': sessionStorage.getItem("SESSID")
            }
        });
        const data = await resp.json();
        const array = data.map(({message,de,para}) => ({
            "data": message,
            "from": de,
            "to": para,
        }));
        console.log(array)
        return array;
    } catch (error) {
        return [];
    }
}
