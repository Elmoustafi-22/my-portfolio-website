'use client'
import { createContext, useEffect, useState, ReactNode, Dispatch, SetStateAction } from "react";

type DarkModeContextType = {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>
}

export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

type DarkModeProviderProps = {
    children: ReactNode
}

export const DarkModeProvider = ({ children } : DarkModeProviderProps) => {
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
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
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