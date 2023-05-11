import React, { createContext, useState } from 'react'
import data from './Data'
export const Store = createContext();
const ConTextAPI = (props) => {

    const [state, setState] = useState(data);
    return (
        <div>
            <Store.Provider value={[state, setState]}>
                {props.children}
            </Store.Provider>
        </div>
    )
}

export default ConTextAPI
