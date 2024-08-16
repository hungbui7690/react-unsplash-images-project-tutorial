import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  const storedDarkMode = localStorage.getItem('darkTheme')

  if (storedDarkMode === null) {
    return prefersDarkMode
  }

  return storedDarkMode === 'true'
}

export const AppProvider = ({ children }) => {
  getInitialDarkMode()

  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('darkTheme')
  )
  const [searchTerm, setSearchTerm] = useState('dog')

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
