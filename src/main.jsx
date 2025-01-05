/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) */
  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import {RouterProvider} from "react-router-dom";
  import { ToastContainer} from 'react-toastify';
  import router from './routes/Routes';
  import AuthProvider from './auth/AuthProvider';
  import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
  const queryClient = new QueryClient()
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />
       <ToastContainer />
       </QueryClientProvider>
      </AuthProvider>
    </StrictMode>,
  )
  
