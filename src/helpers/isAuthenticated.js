export const isAuthenticated = () =>{
    if(sessionStorage.getItem('SESSID')){
        return sessionStorage.getItem('SESSID').length > 0 ? true : false;
        
    }else{
        return false;
    }
}