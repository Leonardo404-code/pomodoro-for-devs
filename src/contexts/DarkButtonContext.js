import {createContext, useState} from 'react';

export const ThemeContext = createContext({});

export function ThemeContextProvider({children}){
    
    const [isDark, setIsDark] = useState(false);

    function ChangeTheme(){
        setIsDark(!isDark);
    }

    return(
        <ThemeContext.Provider value={{
            ChangeTheme,
            isDark
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
