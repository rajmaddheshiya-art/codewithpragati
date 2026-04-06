import React, { createContext } from "react";
export const dataContext = createContext()
function UserContext({ children }) {
    const serverUrl = "http://192.168.43.163:8000"
    // const nbn = "http://localhost:8000"
    const value = {
        serverUrl
    }
    return (
        <dataContext.Provider value={value}>
            {children}
        </dataContext.Provider>
    )

}

export default UserContext