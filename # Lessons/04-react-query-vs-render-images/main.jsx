import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'
import { AppProvider } from './context.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' // 1.

const queryClient = new QueryClient() // 2. create client

// 3. wrap
createRoot(document.getElementById('root')).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AppProvider>
)
