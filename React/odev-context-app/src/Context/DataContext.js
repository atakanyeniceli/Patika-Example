import { createContext, useState} from 'react';


const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([])
    const values = {
        data, setData
    }
    return <DataContext.Provider value={values}>{children}</DataContext.Provider>
}

export default DataContext