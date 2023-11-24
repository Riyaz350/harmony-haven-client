import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './Routes/Routes.jsx';
import {RouterProvider} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={Routes} />
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
