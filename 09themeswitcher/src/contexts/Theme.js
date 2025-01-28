import { createContext, useContext } from "react"; // Import the createContext and useContext hooks

export const ThemeContext = createContext({ // Create a context with default values.
  themeMode: "light", // Default theme mode is light.
  darkTheme: () => {}, // Default darkTheme function is an empty function.
  lightTheme: () =>{}, // Default lightTheme function is an empty function.
});

export const ThemeProvider = ThemeContext.Provider; // Create a ThemeProvider component with the ThemeContext.Provider.

export default function useTheme() { // create a custom hook to use the theme context.
  return useContext(ThemeContext); // Return the useContext hook with the ThemeContext.
}