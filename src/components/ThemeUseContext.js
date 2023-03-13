// useTheme and useThemeUpdate are custom hooks that provide access to the theme and theme toggling function respectively. The ThemeProvider component provides the theme state and toggle function to the children components via Context. The theme state is managed using useState hook.


import React, { useState , useContext } from "react";
const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({children}) {
    const[darkTheme, setDarkTheme] = useState(true);
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}