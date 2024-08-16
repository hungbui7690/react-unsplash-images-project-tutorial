import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [searchTerm, setSearchTerm] = useState('cat') // 3.

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme)

    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', isDarkTheme)
  }

  // 4. pass -> Gallery
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
