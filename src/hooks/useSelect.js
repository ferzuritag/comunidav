import { useState } from "react";
export const useSelect = () => {
    //it sets the initialState to useState hook
    const [state, setState] = useState({
        selected: 'menu-name',
        options: [],
    });

    const handleSelectChange = (e) =>{
        setState({
            ...state,
            selected: e.target.value,
        });
    }
    return [state, setState, handleSelectChange];
}
