import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light"); // Set the default theme mode to light.

  const lightTheme = () => { // Create a function called lightTheme.
    setThemeMode("light");
  }

  const darkTheme = () => { // Create a function called darkTheme
    setThemeMode("dark");
  }

  // Actual change in the theme.

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');

    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme}}> {/* pass the themeMode, darkTheme, and lightTheme to the ThemeProvider, passing the value props.*/}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
