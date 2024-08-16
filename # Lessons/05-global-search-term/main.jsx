/*
  React Query DevTools
  - React Query dev tools provide a way to inspect and debug React Query data and caching behavior. To use this tool, you will need to install and set up the React Query dev tools in your application.

  ~~ npm i @tanstack/react-query-devtools


*******************************

  1. main.jsx


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Global Search Term

  2. context.jsx
  3. Gallery.jsx
  4. SearchForm.jsx


  ❌ use RDT to check -> we can see that searchValue is changed -> but the images does not re-render
    => will fix in next lesson


*/

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools' // 1.

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />

      {/* 2. context.jsx */}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </AppProvider>
)
