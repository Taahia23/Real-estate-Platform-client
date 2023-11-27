import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routers/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

// tanstack

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// tanstack

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
         <RouterProvider router={router} />
    </QueryClientProvider>
   
    </AuthProvider>
  </React.StrictMode>,
)
