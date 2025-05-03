import { createContext, useContext } from "react";


//creating the context and directly giving it the functionality or values that we have to incorporate
export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;


//previously we were saying like useContext in everywhere
//where we were using the theme context
//now no need to do that **



//this is a new hook to provide every component a relaxation that it does not have to import everytime the context and explicitly mention that i need this context
export default function useTheme () {
    return useContext(ThemeContext);
}

//now here we are creating this function to create context 
// and provide context in single file

//so no need to create a new file (userContextProvider) 











//now we use only the ThemeProvider 