import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext(null)

const getInitialTheme = () => {
    if (typeof window !== "undefined") {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) return storedTheme === 'dark'

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return false;
}
export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(getInitialTheme)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}