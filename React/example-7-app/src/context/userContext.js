import { Children, createContext } from 'react'

const userContext = createContext();
const values = {
    id: 1,
    userName: 'ayeniceli',
    bia: 'lorem ipsum doler'
}

export const userProvider = ({ children }) => {
    return <userContext.Provider value={values}>{Children}</userContext.Provider>
}

export default userContext;
