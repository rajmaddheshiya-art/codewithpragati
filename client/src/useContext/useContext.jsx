import React, { createContext } from "react";
export const dataContext = createContext()
function UserContext({ children }) {
    const serverUrl = "https://codewithpragati-api.onrender.com/"
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