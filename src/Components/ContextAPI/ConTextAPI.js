import React, { createContext, useState } from 'react'
import data from './Data'
export const Store = createContext();
const ConTextAPI = (props) => {

    const [state, setState] = useState(data);
    const [token, setToken] = useState();

    return (
        <div>
            <Store.Provider value={[state, setState, token, setToken]}>
                {props.children}
            </Store.Provider>
        </div>
    )
}

export default ConTextAPI
