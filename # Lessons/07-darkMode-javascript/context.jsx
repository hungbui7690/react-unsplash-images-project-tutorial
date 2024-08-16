/*
  Dark Mode - Javascript
  - instead of using CSS to check -> we can also use JS to check 


*************************

  1. context.jsx


*/

import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

// 1. check if css code has "prefers-color-scheme:dark" -> localStorage
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
  getInitialDarkMode() // 2.

  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('darkTheme')
  )
  const [searchTerm, setSearchTerm] = useState('cat')

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme) // 3.
  }

  // 4.
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
