/*
  Setup 
  ~~ npm create vite@latest


**************************

  Components
  1. Create three components: 
    -> ThemeToggle
    -> SearchForm
    -> Gallery

  2. Render in App.jsx

  
***************************

  Context
    
  2. create context.jsx
  3. main.jsx
  4. ThemeToggle.jsx


*/

import ThemeToggle from './ThemeToggle'
import SearchForm from './SearchForm'
import Gallery from './Gallery'

function App() {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  )
}

export default App
