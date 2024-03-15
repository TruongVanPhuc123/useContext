import React from 'react'

export const AppContext = React.createContext()

const data = {
    username: 'tvphuc',
    password: 'password',
}

export const AppProvider = ({ children }) => {

    return <AppContext.Provider value={{ data }}>
        {children}
    </AppContext.Provider>
}