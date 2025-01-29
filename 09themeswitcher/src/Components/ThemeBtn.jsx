import React from 'react'
import useTheme from '../contexts/Theme';

export default function ThemeBtn() {
    
   const {themeMode, lightTheme, darkTheme} = useTheme(); // Destructure the themeMode, lightTheme, and darkTheme from useTheme hook.

   const onChangeBtn = (e) => {// create a function called onChangeBtn that takes an event as an argument.
    const darkModeStatus = e.currentTarget.checked; // create a variable called darkModeStatus and set it to e.currentTarget.checked.
    if(darkModeStatus){
      darkTheme();
    }else{
      lightTheme();
    }
   }

  return (
      <label className="relative inline-flex items-center cursor-pointer">
          <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={onChangeBtn} // add the onChange event listener to the input element and call the onChangeBtn function
              checked={themeMode === "dark"} // add the checked attribute to the input element and set it to themeMode === "dark".
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
      </label>
  );
}

