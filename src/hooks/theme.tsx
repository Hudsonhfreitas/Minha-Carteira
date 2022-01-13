import React, { createContext, useState, useContext } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';


interface IThemeContext {
    toogleTheme(): void;
    theme: ITheme;
}

interface ITheme {
    title: string;

    color: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        warning: string;
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(() => {
        const themeSaved = localStorage.getItem('@minha-carteira:theme');

        return themeSaved ? JSON.parse(themeSaved) : dark
    });

    const toogleTheme = () => {
        if(theme.title === 'dark') {
            setTheme(light)
            localStorage.setItem('@minha-carteira:theme', JSON.stringify(light))
        }else {
            setTheme(dark)
            localStorage.setItem('@minha-carteira:theme', JSON.stringify(dark))
        }
    }

    return (
        <ThemeContext.Provider value={{toogleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);

    return context
}

export { ThemeProvider, useTheme };
