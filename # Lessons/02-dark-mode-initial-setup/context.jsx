/*
  Dark Theme - Initial Setup
  - In the context of creating a state value called 'isDarkTheme' (boolean) and a helper function called 'toggleDarkTheme', set 'isDarkTheme' to the opposite value when 'toggleDarkTheme' is invoked. 
  - Pass 'isDarkTheme' and 'toggleDarkTheme' down to 'ThemeToggle'. 
  - In 'ThemeToggle', import two icons from the React Icons library (moon and sun) and create a button. When the button is clicked, invoke 'toggleDarkTheme', and display the appropriate icon based on the value of 'isDarkTheme' inside of the button.


*****************************

  ~~ npm install react-icons --save


*****************************

  1. context.jsx
  2. ThemeToggle.jsx


*/

import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false) // 1.

  // 2.
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  // 3. ThemeToggle
  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
