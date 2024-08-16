/*
  Dark Theme Class
  - In the toggleDarkTheme add logic to add and remove .dark-theme class to body element based on isDarkTheme value.

  1. context.jsx


***********************

  Dark Theme - CSS
  - Create CSS variables for the background color and text color for both dark mode and normal mode, as well as a CSS variable for the dark mode transition.

    --dark-mode-bg-color: #333;
    --dark-mode-text-color: #f0f0f0;
    --backgroundColor: var(--grey-50);
    --textColor: var(--grey-900);
    --darkModeTransition: color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;


***********************

  User Prefers Dark Mode
  - check if which theme that browser is using -> then apply this -> but cannot switch back 
  - browser -> settings -> theme -> Dark/Light

      @media (prefers-color-scheme: dark) {
        :root {
          --textColor: var(--dark-mode-text-color);
          --backgroundColor: var(--dark-mode-bg-color);
        }
      }


***********************

  SearchForm Structure
  - Create a form with an input and a submit button. The input should have the following attributes: type='text', name='search', placeholder='cat', and className='form-input search-input'. When the user submits the form, access (for now log)the input value.

  2. SearchForm.jsx
    ~~ e.target.elements -> list out all elements in the form


***********************

  Elements Property
  - The elements property of the event.target object in the handleSubmit function refers to an HTMLCollection containing all the form controls (i.e., input, select, textarea, button, etc.) inside the <form> element.
  - This is useful because you can use the elements collection to get the values of the form controls when the form is submitted. For example, e.target.elements.search.value would give you the value of the search input field when the form is submitted.


*/

import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme)

    // 1. check .dark-theme in css
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', isDarkTheme) // adds the dark-theme class if isDarkTheme is true, and removes it if isDarkTheme is false.
    console.log(body)
  }

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
