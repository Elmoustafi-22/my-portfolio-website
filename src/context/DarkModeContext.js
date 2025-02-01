'use client'
import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setDarkMode(storedTheme === 'dark')
        } else {
            setDarkMode(
              window.matchMedia("(prefers-color-scheme: dark)").matches
            );
        }
    }, [])

    useEffect(() => {
        if (darkMode !== null) {
            if (darkMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light')
            }
        }
    }, [darkMode])

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}